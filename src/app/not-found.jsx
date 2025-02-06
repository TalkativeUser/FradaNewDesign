import Image from "next/image";
import notfound from "../../public/images/404.jpg"
import Link from "next/link";
export default function NotFound() {
  // const router = useRouter();
  // useEffect(() => {
  //   router.replace("/");
  // }, [router]);
  // return null;
  return(
    <div className="not-found-container">
      <Image src={notfound} fill alt="farda not found"/>
      <div className="home-btn">
        <Link href="/">الصفحة الرئيسية</Link>
      </div>
    </div>
  )
}