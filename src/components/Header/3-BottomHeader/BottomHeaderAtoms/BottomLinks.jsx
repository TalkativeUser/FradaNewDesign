import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BottomLinks = ({ category }) => {

  console.log("category =>>" , category );
  const pathname = usePathname();


  return (
    <li className="listed min-h-[82px]  flex items-center justify-center ">
      <Link href={`/products/${category.slug}`} className="listed-desc">
        <div className="category-name flex items-center justify-center gap-[2px]  ">
         
            {  category.subcategories.length ? 
             <IoIosArrowDown color={pathname.includes(category.slug)  ?"#d07a51":""} />:""}

          <p className={pathname.includes(category.slug)  ?"text-[#d07a51]":"" } >{category.arabic_name}</p>

        </div>
      </Link>

      {category.subcategories.length > 0 ? (
        <div className="subcategory">
          {/* <Container fluid>
            <Row>
          

              <Col md={{ span: 6 }} className="p-0">
                <div className="subcategory-content">
                  <div className="subcategory-container justify-end">
                   

                    <ul className="subcategory-list list-unstyled">
                      <li>
                        <Link
                          href={`/products/${category.slug}}`}
                          className="listed-desc text-inherit"
                        >
                          <p>إظهار الكل</p>
                        </Link>
                      </li>
                    
                    </ul>
                  </div>

                 
                </div>
              </Col>
            </Row>
          </Container> */}

          <ul>

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
      ) : null}
    </li>
  );
};
export default BottomLinks;
