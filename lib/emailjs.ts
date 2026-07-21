/** Identificadores públicos de EmailJS; restringir dominios permitidos desde el panel. */
export const emailjsConfig = {
  serviceId:
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    "service_oopwj2c",
  templateId:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    "template_g17jead",
  publicKey:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
    "NzvmJs6WKa23_VH_m",
} as const;

/** Variables del template `template_g17jead` en EmailJS */
export type ContactEmailTemplateParams = {
  from_name: string;
  apellido: string;
  reply_to: string;
  telefono: string;
  message: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export function toTemplateParams(
  payload: ContactFormPayload
): ContactEmailTemplateParams {
  return {
    from_name: payload.name.trim(),
    apellido: "",
    reply_to: payload.email.trim(),
    telefono: "—",
    message: payload.message.trim(),
  };
}
