import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DonationForm";
function DonationForm() {
  const navigation = useNavigation(); // Provides navigation state

  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="donation-form-container">
        <h2>Make a Donation</h2>

        {/* Success Message */}
        {/* {actionData?.success && (
        <div className="success-message">{actionData.success}</div>
        )} */}

        {/* Error Message */}
        {/* {actionData?.errors && (
        <div className="error-message">
        {actionData.errors.map((error, index) => (
            <p key={index}>{error}</p>
            ))}
            </div>
            )} */}

        {/* Donation Form */}
        <Form method="post" className="donation-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">
              Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email Field */}

          {/* Donation Amount Field */}
          <div className="form-group">
            <label htmlFor="amount">
              Donation Amount ($)<span className="required">*</span>
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="50"
              min="1"
              step="0.01"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message or reason for donating"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Donate"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
}

export default DonationForm;
