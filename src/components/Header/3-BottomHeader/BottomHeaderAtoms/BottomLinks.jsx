;import SocialLinks from "@/components/utils/SocialLinks/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
const API_URL = process.env.NEXT_PUBLIC_IMAGE_SRC;
const BottomLinks = ({ category }) => {
  return (
    <li className="listed">
      <Link href={`/products/${category.slug}`} className="listed-desc">
        <div className="category-name">
          <p>{category.arabic_name}</p>
        </div>
      </Link>

      {category.subcategories.length > 0 ? (
        <div className="subcategory">
          <Container fluid>
            <Row>
              <Col md={{ span: 6 }} className="p-0">
                <div className="img-container">
                  <Image
                    src={`${API_URL}/Category/${category.photo}`}
                    width={1000}
                    height={500}
                    quality={100}
                    priority
                    alt={category.arabic_name}
                  />
                  <div className="layer"></div>
                  <div className="content">
                    <p>إكتشف أهم مستلزمات الرجال في العصر الحديث</p>
                    <p>{category.Name}</p>
                    <Link href={`/products/${category.slug}`} className="listed-desc">
                      <button className="btn">إكتشف المزيد</button>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md={{ span: 6 }} className="p-0">
                <div className="subcategory-content">
                  <div className="subcategory-container justify-end">
                    <ul className="group-list list-unstyled">
                      <li>أبرز المجموعات</li>
                      <li>مجموعات إيطاليه نادره</li>
                      <li>مجموعات إيطاليه نادره</li>
                    </ul>

                    <ul className="subcategory-list list-unstyled">
                      <li>
                        <Link
                          href={`/products/${category.slug}}`}
                          className="listed-desc text-inherit"
                        >
                          <p>إظهار الكل</p>
                        </Link>
                      </li>
                      {category.subcategories.map((subcategory, index) => (
                        <li key={index}>
                          <Link
                            href={`/products/${category.slug}/${subcategory.slug}`}
                            className="listed-desc text-inherit"
                          >
                            <p>{subcategory.arabic_name}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="social-links-container">
                    <SocialLinks text="تابعنا علي مواقع التواصل الإجتماعي" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : null}
    </li>
  );
};
export default BottomLinks;
