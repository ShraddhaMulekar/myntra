import { Link } from "react-router-dom";

export const AuthForm = ({
    switchAccount,
  title,
  formData,
  handleChange,
  handleSubmit,
  showName,
  showRole,
  buttonText,
}) => {
  return (
    <>
    <h1 className="form-heading">{title}</h1>
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {/* Name field (Register only) */}
        {showName && (
          <div className="field">
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Email (Both) */}
        <div className="field">
          <label className="label-text">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Email (Both) */}
        <div className="field">
          <label className="label-text">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Role (Register only) */}
        {showRole && (
          <div className="field">
            <label className="label-text">Role</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}

        <button type="submit" className="submit-btn">
          {buttonText}
        </button>

        <div className="login-link">
            {switchAccount}
        </div>
      </form>

      <div className="image-container">
        <img
          src="https://helloyubo.com/wp-content/uploads/2022/11/eCommerce.png"
          alt="Shopping"
          className="promo-image"
        />
      </div>
    </div>
    </>
  );
};
