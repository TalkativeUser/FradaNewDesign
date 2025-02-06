import "./ReturnsAndRefunds.css";
const ReturnsAndRefunds = () => {
  return (
    <section className="returns-refunds-section">
      <div>
        <h4>الإرجاع</h4>
        <p>
          وفقاََ للشروط والأحكام المقدمة، يحق لك إرجاع المنتجات في غضون 14
          يوماََ تقويمياََ من الإستلام. لطلب الإرجاع، ما عليك سوى إتباع هذه
          الخطوات البسيطة:
        </p>
        <ol>
          <li>
            <span>لا تتردد في الإتصال بفريق خدمة العملاء على</span>
            <p className="tel">
              <a href="tel:+966557665585">+966-55-366-5585</a>
            </p>
          </li>
          <li>
            سيقوم فريق خدمة العملاء بترتيب عملية إستلام المرتجعات للعميل وسيتم
            جمع العناصر خلال يوم إلى يومين من تاريخ الموافقة.
          </li>
          <li>ستقوم شركة الشحن بالتواصل مع العميل لترتيب عملية الإستلام.</li>
          <li>
            بمجرد إرجاع المنتج مرة أخرى إلى متجر فرادا، ستبدأ عملية إسترداد
            الأموال.
          </li>
        </ol>
      </div>
      {/*  */}
      <div>
        <h4>الإرجاع للمقر</h4>
        <p>يمكن للعميل زيارة أو إرسال القطع إلى معرض فرادا وإعادة العناصر.</p>
        <p>عنوان متجر فرادا فرع الرياض :</p>
        <p className="address">طريق أنس ابن مالك، الصحافة،الرياض 13321</p>
      </div>
      {/*  */}
      <div>
        <h5>يرجى ملاحظة أننا غير قادرين على قبول إرجاع المنتجات التالية:</h5>
        <ol>
          <li>
            المنتجات المختومة التي تم فتحها بعد التسليم، حيث تكون إعادة هذه
            المنتجات غير مناسبة لأسباب تتعلق بالصحة أو النظافة (على سبيل المثال
            الملابس الداخلية والعطور)
          </li>
          <li>المنتجات المخصصة أو المصنوعة وفقاََ لمواصفاتك.</li>
          <li>
            المنتجات التي أصبحت مختلطة بشكل لا ينفصل مع العناصر الأخرى بعد
            التسليم.
          </li>
        </ol>
      </div>
      {/*  */}
      <div>
        <p>
          سيتم فحص جميع المنتجات المرتجعة من قبل فرادا في غضون خمسة (5) أيام عمل
          من وقت إستلامنا الطرد ونرسل إليك بريداََ إلكترونياََ يؤكد قبول المنتجات
          المرتجعة ورد أو إسترداد الأموال المستحقة إليك. في حالة رفض الإرجاع،
          ستقوم خدمة العملاء بإعلامك بالسبب وسيتم إرجاع الطرد إليك. يرجى ملاحظة
          أن العديد من مقدمي خدمات الدفع لديهم مُدد أو فترات معالجة مختلفة
          لإسترداد الأموال، وقد يستغرق الأمر عدة أيام عمل حتى تتم معالجة المبالغ
          المستردة إلى طريقة الدفع الأصلية الخاصة بك.
        </p>
        <p>
          نحن لا نقبل عمليات الإستبدال أو تقديم المبالغ المستردة للمشتريات التي
          تمت عبر متجر فرادا الأونلاين، عبر عملية الإرجاع هذه. يجب إعادة جميع
          المشتريات التي تم إجراؤها في متجر فرادا إلى أحد فروعنا.
        </p>
      </div>
    </section>
  );
};
export default ReturnsAndRefunds;
