"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { FileCheck2, Loader2, MessageCircle, Paperclip, Send, Stamp } from "lucide-react";
import Reveal from "./Reveal";
import { trackCalculatorSubmit, trackWhatsAppClick } from "@/lib/analytics";

const API_ENDPOINT = "/api/calculator-request";
const MAX_FILE_BYTES = 4 * 1024 * 1024;

const WHATSAPP_NUMBER = "905387442235";

type Status = "idle" | "submitting" | "success" | "error";

export default function TranslationCalculator() {
  const t = useTranslations("calculator");
  const languages = useTranslations("translation").raw("languages") as string[];
  const languagesOthers = useTranslations("translation")("languagesOthers");

  const formRef = useRef<HTMLFormElement>(null);
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("");
  const [notary, setNotary] = useState(false);
  const [apostille, setApostille] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileTooLarge, setFileTooLarge] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected && selected.size > MAX_FILE_BYTES) {
      setFileTooLarge(true);
      setFileName("");
      e.target.value = "";
      return;
    }
    setFileTooLarge(false);
    setFileName(selected?.name ?? "");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit failed");
      trackCalculatorSubmit();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function sendViaWhatsApp() {
    const lines = [
      t("whatsappIntro"),
      `${t("phoneLabel")}: ${phone || "—"}`,
      `${t("languageLabel")}: ${language || "—"}`,
      `${t("notaryLabel")}: ${notary ? t("yes") : t("no")}`,
      `${t("apostilleLabel")}: ${apostille ? t("yes") : t("no")}`,
      fileName ? t("whatsappFileNote", { file: fileName }) : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    trackWhatsAppClick("calculator_form");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div id="calculator" className="mx-auto max-w-3xl scroll-mt-24">
      <Reveal delay={0.1}>
        <h3 className="mt-16 text-lg font-semibold text-navy sm:text-xl">
          {t("title")}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{t("subtitle")}</p>
      </Reveal>

      <Reveal delay={0.15}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl border border-navy/10 bg-cream p-7 sm:p-10"
          >
            <input type="hidden" name="_subject" value={t("emailSubject")} />

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-navy">
                  {t("phoneLabel")} <span className="text-gold">*</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("phonePlaceholder")}
                  className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/35 outline-none transition-colors focus:border-gold"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-navy">
                  {t("languageLabel")} <span className="text-gold">*</span>
                </span>
                <select
                  name="language"
                  required
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-gold"
                >
                  <option value="" disabled>
                    {t("languagePlaceholder")}
                  </option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                  <option value={languagesOthers}>{languagesOthers}</option>
                </select>
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <label className="flex items-center gap-3 text-sm font-medium text-navy">
                <input
                  type="checkbox"
                  name="notary"
                  checked={notary}
                  onChange={(e) => setNotary(e.target.checked)}
                  className="h-5 w-5 rounded border-navy/25 accent-gold"
                />
                <Stamp size={18} className="text-gold" />
                {t("notaryLabel")}
              </label>

              <label className="flex items-center gap-3 text-sm font-medium text-navy">
                <input
                  type="checkbox"
                  name="apostille"
                  checked={apostille}
                  onChange={(e) => setApostille(e.target.checked)}
                  className="h-5 w-5 rounded border-navy/25 accent-gold"
                />
                <FileCheck2 size={18} className="text-gold" />
                {t("apostilleLabel")}
              </label>
            </div>

            <div className="mt-6">
              <span className="text-sm font-medium text-navy">{t("fileLabel")}</span>
              <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-navy/25 bg-white px-4 py-3 text-navy/70 transition-colors hover:border-gold">
                <Paperclip size={18} className="shrink-0 text-gold" />
                <span className="truncate text-sm">{fileName || t("fileHint")}</span>
                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {fileTooLarge && (
                <p className="mt-2 text-xs font-medium text-red-600">{t("fileTooLarge")}</p>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === "submitting" ? t("submitting") : t("submitButton")}
              </button>

              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-whatsapp-dark"
              >
                <MessageCircle size={16} />
                {t("whatsappButton")}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-whatsapp">{t("successMessage")}</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">{t("errorMessage")}</p>
            )}
            <p className="mt-4 text-xs text-navy/50">{t("whatsappHint")}</p>
          </form>
      </Reveal>
    </div>
  );
}
