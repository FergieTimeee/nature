HƯỚNG DẪN THỰC HÀNH LÀM PROJECT HTML-CSS

- website chia sẻ mẫu giao diện:

* https://themehunt.com
* https://themeforest.net/

- Cấu trúc files, thư mục

* css: Thư mục chứa các file css
* - style.css: File css chính của dự án
* - gird.css : File chwusa code gird system ( Nên sử dụng flex)
* - reset.css: File chứa code reset css
* - base.css : File chứa các style mặc định ban đầu của project
* - responsive.css: File chứa style responsive ( media queries)
* - animate.min.css: File thư viện animate css( Dowload từ trang chủ thư viện)
* - all.min.css: File thư việc font-awesome 5 (Dowload từ trang chủ thư viện )
* fonts: Thư mục chứa fonts của dự án
* webfonts: Thư mục chứa các file fonts của thư viện font-awesome
* images: Thư mục chứa các file ảnh
* js: Thư mục chwusa các file javascript
* index.html: File chạy chính của dự án( Trang chủ)
* category.html: File trang chuyên mục
* blog.html: Flie trang blog

- Chuẩn bị công cụ cần thiết

* Pick màu: ColorZilla => https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en
* Tìm tên Fonts: What Fonts => https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en
* Đo kích thước: Page Ruler Redux => https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal?hl=en
* VisBug: https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc?hl=en

- Thư viện tạo slide ảnh (Carousel)

* Owl Carousel:https://owlcarousel2.github.io/OwlCarousel2/
* Slick Carousel:https://kenwheeler.github.io/slick/
 <script>
      (() => {
    const includes = document.getElementsByTagName('include');
    [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();
            });
        });
    });
})();
 <script>
