import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "@deemlol/next-icons";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="md:grid grid-cols-9 mb-16 mt-20 md:my-28">
        <div className="col-span-3 flex md:block justify-center flex-col items-center">
          <Image src="/assets/logo.svg" alt="Star" width={250} height={250} />
          <p className="text-dimWhite text-lg leading-8 mt-10 md:mt-8 md:ml-6 text-center md:text-left">
            a new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="footer-links">
          <h3>usefull links</h3>
          <ul>
            <Link href="#header">
              <li>content</li>
            </Link>
            <Link href="#header">
              <li>how it works</li>
            </Link>
            <Link href="#header">
              <li>create</li>
            </Link>
            <Link href="#header">
              <li>explore</li>
            </Link>
            <Link href="#header">
              <li>terms & services</li>
            </Link>
          </ul>
        </div>
        <div className="footer-links">
          <h3>community</h3>
          <ul>
            <Link href="#header">
              <li>help center</li>
            </Link>
            <Link href="#header">
              <li>parteners</li>
            </Link>
            <Link href="#header">
              <li>suggestions</li>
            </Link>
            <Link href="#header">
              <li>blog</li>
            </Link>
            <Link href="#header">
              <li>newsletters</li>
            </Link>
          </ul>
        </div>
        <div className="footer-links">
          <h3>partner</h3>
          <ul>
            <Link href="#header">
              <li>our partner</li>
            </Link>
            <Link href="#header">
              <li>become a partner</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center py-10 border-t border-[#3F3E45]">
        <p className="text-dimWhite md:text-lg text-center md:text-start">
          copyright &copy; 2025 hooBank. all rights reserved.
        </p>
        <div className="footer-social">
          <Link href="https://youtube.com" target="_blank">
            <Youtube size={26} />
          </Link>
          <Link href="https://x.com" target="_blank">
            <Twitter size={26} />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Instagram size={26} />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Facebook size={26} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
