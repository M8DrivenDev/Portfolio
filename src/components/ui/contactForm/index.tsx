import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    setIsSubmitting(true);
    setSubmitStatus("");

    if (!form.current) return;
    e.preventDefault();
    emailjs
      .sendForm("service_iyh3evz", "template_6kdvydc", form.current, {
        publicKey: "w2d01fGh4K3LlY8Cs",
      })
      .then(
        () => {
          setSubmitStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            title: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus("Failed to send message. Please try again.");
          console.error("Error sending message:", error);
          setFormData({
            name: "",
            email: "",
            title: "",
            message: "",
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-title">Reach out to me</h2>

      <form className="contact-form" onSubmit={handleSubmit} ref={form}>
        <div className="form-row">
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              id="name"
            />
            <label
              htmlFor="name"
              className={`form-label ${formData.name ? "active" : ""}`}
            >
              Name
            </label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              id="email"
            />
            <label
              htmlFor="email"
              className={`form-label ${formData.email ? "active" : ""}`}
            >
              Email
            </label>
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-input"
            id="title"
          />
          <label
            htmlFor="title"
            className={`form-label ${formData.title ? "active" : ""}`}
          >
            Title
          </label>
        </div>

        <div className="input-container">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-textarea"
            rows={6}
            id="message"
          />
          <label
            htmlFor="message"
            className={`form-label ${formData.message ? "active" : ""}`}
          >
            Message
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? "loading" : ""}`}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {submitStatus && (
          <div
            className={`status-message ${submitStatus.includes("successfully") ? "success" : "error"}`}
          >
            {submitStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
