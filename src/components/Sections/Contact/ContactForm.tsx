import React, {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
import { formUrl } from '../../../data/data';

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const emailForm = useRef<HTMLFormElement>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  function disableAllButtons(form: EventTarget) {
    if (emailForm.current) {
      var buttons = emailForm.current.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  }

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      var form = event.target;
  
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (data.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
      var url = formUrl;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (emailForm.current) {
              emailForm.current.reset();
            }
            // TODO show a confirmation of sent email so that people know the button worked
          }
      };
      // url encode form data for sending as post data
      var encoded = Object.entries(data).map(function([key, value]) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(value);
      }).join('&');
      xhr.send(encoded);
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-200 dark:bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-800 dark:text-neutral-200 text-sm';

  return (
    <form ref={emailForm} className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        style={{ minHeight: 160 }}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-orange-600 dark:bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
      <input
        id='honeypot'
        name='honeypot'
        type='text'
        value=''
        style={{ display: 'none' }}
      />
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
