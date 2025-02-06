"use client";
import Link from "next/link";
const ErrorBoundary = ({ error, reset }) => {
  return (
    <section className="error-container">
      <div className="error-text">{error.message}</div>
      <div className="links">
        <div>
          <Link href="/">الصفحة الرئيسية</Link>
        </div>
        <div onClick={reset}>إعادة التحميل</div>
      </div>
    </section>
  );
};
export default ErrorBoundary;
