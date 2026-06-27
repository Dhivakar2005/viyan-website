/**
 * EmailJS Configuration
 *
 * To set this up:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Click "Add New Service" → Choose "Gmail" → Connect viyantechnologiesteam@gmail.com
 * 3. Note your SERVICE_ID (e.g. "service_xxxxxx")
 * 4. Go to "Email Templates" → Create a new template using the variables below:
 *    Subject: New Contact from {{from_name}} - {{service}}
 *    Body:
 *      Name: {{from_name}}
 *      Email: {{from_email}}
 *      Phone: {{phone}}
 *      Company: {{company}}
 *      Service: {{service}}
 *      Budget: {{budget}}
 *      Message: {{message}}
 * 5. Note your TEMPLATE_ID (e.g. "template_xxxxxx")
 * 6. Go to "Account" → "API Keys" → copy your Public Key
 * 7. Replace the placeholder strings below with your actual values
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_remrxrh',       // e.g. 'service_abc123'
  TEMPLATE_ID: 'template_wr9qmum',     // e.g. 'template_xyz456'
  PUBLIC_KEY: 'PHbs91P2jbr46djUS',       // e.g. 'user_AbCdEfGhIjKlMnOp'
  TO_EMAIL: 'viyantechnologiesteam@gmail.com',
};
