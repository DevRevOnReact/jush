import { ArrowUp, Link } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" text-white py-16 px-4">
      <div className="container mx-auto  bg-[#0f1117] py-16 rounded-3xl px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="w-12 h-12 rounded border-2 border-blue-600 flex items-center justify-center bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Logo Dark"
                  width={150}
                  height={50}
                  priority // Improve loading performance
                />{" "}
              </div>
            </Link>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                JUNZI TECH SOLUTIONS CORP
              </h3>
              <p className="text-gray-400">
                We&apos;re a brand strategy and digital design agency, building
                brands that matter in culture.
              </p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Locations</h3>
            <ul className="space-y-3 text-gray-400">
              <li>254CHAPMAN 208</li>
              <li>STENEWARKDE19702-5422</li>
              <li>NEWARK DE 19702-5422</li>
            </ul>
          </div>

          {/* Work Inquiries */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Work Inquiries</h3>
            <ul className="space-y-3 text-gray-400">
              <a
                href="https://www.instagram.com/software_artifex/"
                target="_blank"
                rel="noopener noreferrer"
                className="social"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 24.75C21.0563 24.75 24.75 21.0563 24.75 16.5C24.75 11.9436 21.0563 8.25 16.5 8.25C11.9436 8.25 8.25 11.9436 8.25 16.5C8.25 21.0563 11.9436 24.75 16.5 24.75ZM16.5 22C19.5375 22 22 19.5375 22 16.5C22 13.4624 19.5375 11 16.5 11C13.4624 11 11 13.4624 11 16.5C11 19.5375 13.4624 22 16.5 22Z"
                    fill="#8A8A8A"
                  />
                  <path
                    d="M24.75 6.875C23.9906 6.875 23.375 7.49062 23.375 8.25C23.375 9.00939 23.9906 9.625 24.75 9.625C25.5094 9.625 26.125 9.00939 26.125 8.25C26.125 7.49062 25.5094 6.875 24.75 6.875Z"
                    fill="#8A8A8A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.27419 5.87958C1.375 7.64435 1.375 9.95457 1.375 14.575V18.425C1.375 23.0454 1.375 25.3557 2.27419 27.1204C3.06515 28.6727 4.32723 29.9348 5.87958 30.7257C7.64435 31.625 9.95457 31.625 14.575 31.625H18.425C23.0454 31.625 25.3557 31.625 27.1204 30.7257C28.6727 29.9348 29.9348 28.6727 30.7257 27.1204C31.625 25.3557 31.625 23.0454 31.625 18.425V14.575C31.625 9.95457 31.625 7.64435 30.7257 5.87958C29.9348 4.32723 28.6727 3.06515 27.1204 2.27419C25.3557 1.375 23.0454 1.375 18.425 1.375H14.575C9.95457 1.375 7.64435 1.375 5.87958 2.27419C4.32723 3.06515 3.06515 4.32723 2.27419 5.87958ZM18.425 4.125H14.575C12.2194 4.125 10.6181 4.12714 9.38036 4.22826C8.1747 4.32677 7.55815 4.50531 7.12805 4.72446C6.09316 5.25177 5.25177 6.09316 4.72446 7.12805C4.50531 7.55815 4.32677 8.1747 4.22826 9.38036C4.12714 10.6181 4.125 12.2194 4.125 14.575V18.425C4.125 20.7806 4.12714 22.3818 4.22826 23.6196C4.32677 24.8253 4.50531 25.4419 4.72446 25.872C5.25177 26.9068 6.09316 27.7482 7.12805 28.2755C7.55815 28.4947 8.1747 28.6733 9.38036 28.7717C10.6181 28.8728 12.2194 28.875 14.575 28.875H18.425C20.7806 28.875 22.3818 28.8728 23.6196 28.7717C24.8253 28.6733 25.4419 28.4947 25.872 28.2755C26.9068 27.7482 27.7482 26.9068 28.2755 25.872C28.4947 25.4419 28.6733 24.8253 28.7717 23.6196C28.8728 22.3818 28.875 20.7806 28.875 18.425V14.575C28.875 12.2194 28.8728 10.6181 28.7717 9.38036C28.6733 8.1747 28.4947 7.55815 28.2755 7.12805C27.7482 6.09316 26.9068 5.25177 25.872 4.72446C25.4419 4.50531 24.8253 4.32677 23.6196 4.22826C22.3818 4.12714 20.7806 4.125 18.425 4.125Z"
                    fill="#8A8A8A"
                  />
                </svg>
                <p className="hover:text-black dark:text-white">Instagram</p>
              </a>

              <a
                href="https://www.linkedin.com/company/junzitechsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="social"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M8.9375 11C10.0766 11 11 10.0766 11 8.9375C11 7.79841 10.0766 6.875 8.9375 6.875C7.79841 6.875 6.875 7.79841 6.875 8.9375C6.875 10.0766 7.79841 11 8.9375 11Z"
                    fill="#8A8A8A"
                  />
                  <path
                    d="M6.875 13.75C6.875 12.9906 7.49062 12.375 8.25 12.375H9.625C10.3844 12.375 11 12.9906 11 13.75V24.75C11 25.5094 10.3844 26.125 9.625 26.125H8.25C7.49062 26.125 6.875 25.5094 6.875 24.75V13.75Z"
                    fill="#8A8A8A"
                  />
                  <path
                    d="M15.125 26.125H16.5C17.2594 26.125 17.875 25.5094 17.875 24.75V18.5625C17.875 16.5 22 15.125 22 17.875V24.7506C22 25.51 22.6156 26.125 23.375 26.125H24.75C25.5094 26.125 26.125 25.5094 26.125 24.75V16.5C26.125 13.75 24.0625 12.375 21.3125 12.375C18.5625 12.375 17.875 14.4375 17.875 14.4375V13.75C17.875 12.9906 17.2594 12.375 16.5 12.375H15.125C14.3656 12.375 13.75 12.9906 13.75 13.75V24.75C13.75 25.5094 14.3656 26.125 15.125 26.125Z"
                    fill="#8A8A8A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.5 1.375C29.7782 1.375 31.625 3.22183 31.625 5.5V27.5C31.625 29.7782 29.7782 31.625 27.5 31.625H5.5C3.22183 31.625 1.375 29.7782 1.375 27.5V5.5C1.375 3.22183 3.22183 1.375 5.5 1.375H27.5ZM27.5 4.125C28.2594 4.125 28.875 4.74061 28.875 5.5V27.5C28.875 28.2594 28.2594 28.875 27.5 28.875H5.5C4.74061 28.875 4.125 28.2594 4.125 27.5V5.5C4.125 4.74061 4.74061 4.125 5.5 4.125H27.5Z"
                    fill="#8A8A8A"
                  />
                </svg>
                <p className="hover:text-black dark:text-white">LinkedIn</p>
              </a>

              <a
                href="mailto:dev@junzitechsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M28.75 5.875H4.25C3.24611 5.875 2.5 6.62111 2.5 7.625V25.375C2.5 26.3789 3.24611 27.125 4.25 27.125H28.75C29.7539 27.125 30.5 26.3789 30.5 25.375V7.625C30.5 6.62111 29.7539 5.875 28.75 5.875ZM28.75 25.375H4.25V9.625L16.5 16.5L28.75 9.625V25.375Z"
                    fill="#8A8A8A"
                  />
                </svg>
                <p className="hover:text-black dark:text-white">
                  dev@junzitechsolutions.com
                </p>
              </a>

              <a href="tel:+16174076181" className="social">
                <svg
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#8A8A8A"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="hover:text-black dark:text-white">
                  +1 617 407 61 81
                </p>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#1a1b1f] p-3 rounded-lg hover:bg-[#2a2b2f] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;