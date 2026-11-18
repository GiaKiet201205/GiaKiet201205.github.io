const RESUME_FILES = {
  en: "/GiaKiet_Resume.pdf",
  vi: "/GiaKiet_Resume_VI.pdf",
};

const MY_INFO = {
  name: "Võ Lâm Gia Kiệt",
  role: "Software Engineering Student",
  avatar: "/QD000584.jpg",
  social: [
    {
      label: "Resume",
      href: RESUME_FILES.en,
      icon: "external",
    },
    {
      label: "GitHub",
      href: "https://github.com/GiaKiet201205",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ki%E1%BB%87t-v%C3%B5-3b890a3b5/",
      icon: "linkedin",
    },
    {
      label: "volamgiakiet@gmail.com",
      href: "mailto:volamgiakiet@gmail.com",
      icon: "email",
    },
  ],
  skills: [
    "Java",
    "Python",
    "React",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Cypress",
    "Linux",
  ],
};

const PROJECTS = [
  {
    id: "training-center",
    name: "Training Center Management System",
    repository: "https://github.com/GiaKiet201205/BE-QLDAPM",
    repositories: [
      { label: "Frontend", href: "https://github.com/GiaKiet201205/FE-QLDAPM" },
      { label: "Backend", href: "https://github.com/GiaKiet201205/BE-QLDAPM" },
    ],
    tagline: "Academic Operations, Staff Scheduling & Payroll",
    course: "Academic Project · Fall 2026",
    description:
      "Developed a training center management system with React, Spring Boot, and PostgreSQL, supporting six roles with scoped access. Implemented student and class management, availability approval, conflict-aware teaching and staff assignments, teacher attendance, and monthly payroll. Added dashboards and audit history. Integrated a course sales website linking course registrations with training operations.",
    tech: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    metrics: [
      { value: "React", label: "Role-based Interface" },
      { value: "Spring Boot", label: "Business Logic & APIs" },
      { value: "PostgreSQL", label: "Operational Data" },
      { value: "JWT", label: "Authentication & Access Control" },
    ],
  },
  {
    id: "university-admissions",
    name: "University Admissions System",
    repository: "https://github.com/GiaKiet201205/Student-Software-project",
    tagline: "Admissions Administration & Candidate Portal",
    course: "Academic Project · Spring 2026",
    description:
      "Built a Java Swing desktop application for admissions staff and a Spring Boot–Thymeleaf portal for candidates. Implemented score calculation and conversion for THPT, ĐGNL, and V-SAT, plus quota-based selection with preference prioritization. Added Excel data import/export, interactive statistics, and a candidate portal for profile access, admission results, and score estimation.",
    tech: [
      "Java 21",
      "Swing",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "Hibernate",
      "Apache POI",
      "Docker",
    ],
    metrics: [
      { value: "Swing", label: "Desktop Interface" },
      { value: "Spring Boot", label: "Web Backend" },
      { value: "Hibernate", label: "ORM & Data Persistence" },
      { value: "Apache POI", label: "Excel Import & Export" },
    ],
  },
  {
    id: "product-testing",
    name: "Product Management Test Suite",
    repository: "https://github.com/GiaKiet201205/Software-Testing",
    tagline: "Automated Testing for an Apple Product Management App",
    course: "Software Testing · Fall 2025",
    description:
      "Designed automated tests for login, registration, and Apple product management in a React application with mocked frontend services. Covered validation, boundary values, component interactions, product CRUD, and search using Jest, React Testing Library, and Cypress. Organized browser tests with Page Object Model, added Mochawesome JSON/HTML reporting, and integrated CI/CD with GitHub Actions. The project also includes Spring Boot APIs with JWT authentication and MySQL.",
    tech: [
      "React",
      "Spring Boot",
      "MySQL",
      "Cypress",
      "Jest",
      "React Testing Library",
      "Mochawesome",
      "GitHub Actions",
    ],
    metrics: [
      { value: "Jest", label: "Unit & Component Tests" },
      { value: "Cypress", label: "Browser E2E Tests" },
      { value: "CI/CD", label: "GitHub Actions" },
      { value: "Mochawesome", label: "JSON & HTML Test Reports" },
    ],
  },
  {
    id: "ssb",
    name: "Smart School Bus (SSB 1.0)",
    repository: "https://github.com/GiaKiet201205/SWE",
    tagline: "School Bus Management & Route Simulation",
    course: "Software Engineering · Fall 2025",
    description:
      "Developed a full-stack school bus management system for admins, drivers, and parents. Implemented vehicle and route management, trip scheduling, student pickup/drop-off attendance, and incident reporting. Integrated Leaflet route simulation with arrival and delay alerts, Socket.IO location messaging, and an English–Vietnamese interface.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
      "Auth0",
      "i18next",
    ],
    metrics: [
      { value: "Leaflet", label: "Route Simulation" },
      { value: "Socket.IO", label: "Location Messaging" },
      { value: "Attendance", label: "Student Pickup & Drop-off" },
      { value: "EN / VI", label: "Bilingual Interface" },
    ],
  },
  {
    id: "fashion-store",
    name: "Fashion Store",
    repository: "https://github.com/GiaKiet201205/Java",
    tagline: "Clothing Retail Management & POS",
    course: "Java Programming · Spring 2025",
    description:
      "Built a clothing retail management system supporting online shopping through a web storefront and in-store sales through a Java Swing POS application with stock validation. Implemented Admin/User access, product and purchasing management, sales reporting, and Excel exports. Structured the application using the GUI–BLL–DAO–DTO layered architecture.",
    tech: ["Java", "Swing", "MySQL", "JDBC", "Apache POI"],
    metrics: [
      { value: "Layered", label: "Application Architecture" },
      { value: "Analytics", label: "Sales Reporting" },
      { value: "POS", label: "In-store Sales" },
      { value: "XLSX", label: "Data Export" },
    ],
  },
];

const VI_PROJECT_TRANSLATIONS = {
  "training-center": {
    name: "Hệ thống quản lý trung tâm đào tạo",
    tagline: "Quản lý đào tạo, phân công nhân sự & công lương",
    course: "Đồ án học tập · Học kỳ thu 2026",
    description:
      "Phát triển hệ thống quản lý trung tâm đào tạo bằng React, Spring Boot và PostgreSQL, hỗ trợ 6 vai trò với phạm vi truy cập riêng. Triển khai quản lý học viên, lớp học, duyệt lịch rảnh, phân công giáo viên/nhân viên có kiểm tra trùng lịch, điểm danh giáo viên và tính công lương hằng tháng. Bổ sung dashboard và lịch sử thay đổi nghiệp vụ. Tích hợp website bán khóa học, liên kết thông tin đăng ký với hoạt động đào tạo.",
    metrics: [
      { value: "React", label: "Giao diện theo vai trò" },
      { value: "Spring Boot", label: "Nghiệp vụ & API" },
      { value: "PostgreSQL", label: "Dữ liệu vận hành" },
      { value: "JWT", label: "Xác thực & kiểm soát truy cập" },
    ],
  },
    "university-admissions": {
    name: "Hệ thống xét tuyển đại học",
    tagline: "Quản lý tuyển sinh & cổng thông tin thí sinh",
    course: "Đồ án học tập · Học kỳ xuân 2026",
    description:
      "Xây dựng ứng dụng Java Swing cho cán bộ tuyển sinh và cổng thông tin Spring Boot–Thymeleaf cho thí sinh. Triển khai tính, quy đổi điểm theo THPT, ĐGNL và V-SAT; xét tuyển theo chỉ tiêu và thứ tự ưu tiên nguyện vọng. Hỗ trợ nhập/xuất Excel, thống kê trực quan, cùng website cho thí sinh xem hồ sơ, tra cứu kết quả và tính thử điểm xét tuyển.",
    metrics: [
      { value: "Swing", label: "Giao diện desktop" },
      { value: "Spring Boot", label: "Backend website" },
      { value: "Hibernate", label: "Ánh xạ & lưu trữ dữ liệu" },
      { value: "Apache POI", label: "Nhập & xuất Excel" },
    ],
  },
  "product-testing": {
    name: "Bộ kiểm thử quản lý sản phẩm",
    tagline: "Kiểm thử tự động ứng dụng quản lý sản phẩm Apple",
    course: "Kiểm thử phần mềm · Học kỳ thu 2025",
    description:
      "Thiết kế bộ kiểm thử tự động cho đăng nhập, đăng ký và quản lý sản phẩm Apple trên ứng dụng React sử dụng service frontend giả lập. Kiểm thử dữ liệu đầu vào, giá trị biên, tương tác component, thêm/sửa/xóa và tìm kiếm sản phẩm bằng Jest, React Testing Library và Cypress. Tổ chức kiểm thử trình duyệt theo Page Object Model, tạo báo cáo JSON/HTML bằng Mochawesome và tích hợp CI/CD với GitHub Actions. Dự án còn có các API Spring Boot sử dụng xác thực JWT và MySQL.",
    metrics: [
      { value: "Jest", label: "Kiểm thử đơn vị & component" },
      { value: "Cypress", label: "Kiểm thử E2E trên trình duyệt" },
      { value: "CI/CD", label: "GitHub Actions" },
      { value: "Mochawesome", label: "Báo cáo kiểm thử JSON & HTML" },
    ],
  },
  "ssb": {
    name: "Xe buýt học đường thông minh (SSB 1.0)",
    tagline: "Quản lý đưa đón & mô phỏng lộ trình",
    course: "Công nghệ phần mềm · Học kỳ thu 2025",
    description:
      "Xây dựng hệ thống web full-stack quản lý xe buýt học đường dành cho quản trị viên, tài xế và phụ huynh. Triển khai quản lý xe, tuyến đường, lịch chạy, điểm danh đón/trả học sinh và báo cáo sự cố. Tích hợp mô phỏng lộ trình bằng Leaflet với cảnh báo xe sắp đến, trễ giờ, cơ chế truyền vị trí qua Socket.IO và giao diện Anh–Việt.",
    metrics: [
      { value: "Leaflet", label: "Mô phỏng lộ trình" },
      { value: "Socket.IO", label: "Truyền dữ liệu vị trí" },
      { value: "Điểm danh", label: "Đón/trả học sinh" },
      { value: "EN / VI", label: "Giao diện song ngữ" },
    ],
  },
  "fashion-store": {
    name: "Fashion Store",
    tagline: "Quản lý bán hàng thời trang & POS",
    course: "Lập trình Java · Học kỳ xuân 2025",
    description:
      "Xây dựng hệ thống quản lý cửa hàng thời trang, hỗ trợ mua sắm trực tuyến trên website và bán hàng trực tiếp tại quầy qua ứng dụng POS Java Swing có kiểm tra tồn kho. Triển khai phân quyền Admin/User, quản lý sản phẩm và nhập hàng, thống kê kinh doanh và xuất Excel. Ứng dụng được xây dựng theo mô hình phân lớp GUI–BLL–DAO–DTO.",
    metrics: [
      { value: "Phân lớp", label: "Kiến trúc ứng dụng" },
      { value: "Báo cáo", label: "Thống kê kinh doanh" },
      { value: "POS", label: "Bán hàng tại quầy" },
      { value: "XLSX", label: "Xuất dữ liệu" },
    ],
  },
};

// Match translations by stable ID so removing or reordering projects is safe.
const VI_PROJECTS = PROJECTS.map((project) => ({
  ...project,
  ...VI_PROJECT_TRANSLATIONS[project.id],
}));

export const CONTENT = {
  en: {
    info: MY_INFO,
    workExperience: [
      {
        id: "mindx",
        company: "MindX",
        role: "Instructor",
        period: "05/2026 – Present",
        responsibilities: [
          "Supported students in developing technology projects and meeting product quality requirements.",
          "Explained complex technical concepts in clear, accessible language for learners of different ages.",
        ],
      },
      {
        id: "saigonsteam",
        company: "SaiGonSTEAM",
        role: "STEM Teacher",
        period: "12/2025 – Present",
        responsibilities: [
          "Designed and delivered STEM lessons combining theory with hands-on activities so students could apply new concepts in class.",
          "Managed classes, tracked progress, and assessed students’ abilities to adapt teaching methods to their needs.",
        ],
      },
      {
        id: "teky",
        company: "Teky",
        role: "STEM Instructor / Teaching Assistant",
        period: "06/2025 – 10/2025",
        responsibilities: [
          "Supported teaching in computing and robotics, including Scratch, Python, and Robotics.",
          "Guided classroom exercises and helped students identify and fix logic errors.",
          "Adapted to students’ learning needs and created an engaging environment that encouraged their interest in technology.",
        ],
      },
    ],
    projects: PROJECTS,
    ui: {
      pageTitle: "Võ Lâm Gia Kiệt | Portfolio",
      language: "Language",
      avatarAlt: "Portrait of Võ Lâm Gia Kiệt",
      workExperience: "Work Experience",
      contact: "CONTACT",
      techStack: "TECH STACK",
      school: "Saigon University",
      major: "Information Technology",
      portfolio: "portfolio",
      projects: "projects",
      developer: "Developer",
      projectHeading: "Academic & Personal Projects",
      repository: "Repository",
    },
  },
  vi: {
    info: {
      ...MY_INFO,
      role: "Sinh viên chuyên ngành Kĩ thuật phần mềm",
      social: MY_INFO.social.map((link) => ({
        ...link,
        label: link.label === "Resume" ? "Hồ sơ năng lực" : link.label,
        href: link.label === "Resume" ? RESUME_FILES.vi : link.href,
      })),
    },
    workExperience: [
      {
        id: "mindx",
        company: "MindX",
        role: "Giảng viên",
        period: "05/2026 – Nay",
        responsibilities: [
          "Hỗ trợ học viên thực hiện các dự án công nghệ, đảm bảo sản phẩm đáp ứng yêu cầu đầu ra.",
          "Truyền đạt kiến thức kỹ thuật phức tạp bằng ngôn ngữ dễ hiểu, phù hợp với học viên ở nhiều độ tuổi.",
        ],
      },
      {
        id: "saigonsteam",
        company: "SaiGonSTEAM",
        role: "Giáo viên STEM",
        period: "12/2025 – Nay",
        responsibilities: [
          "Thiết kế và triển khai bài giảng STEM kết hợp lý thuyết với thực hành, giúp học sinh hiểu và vận dụng kiến thức ngay tại lớp.",
          "Quản lý lớp học, theo dõi tiến độ và đánh giá năng lực học viên để điều chỉnh phương pháp giảng dạy phù hợp.",
        ],
      },
      {
        id: "teky",
        company: "Teky",
        role: "Giảng viên / Trợ giảng STEM",
        period: "06/2025 – 10/2025",
        responsibilities: [
          "Hỗ trợ giảng dạy các môn Công nghệ thông tin và Robotics như Scratch, Python và lập trình robot.",
          "Hướng dẫn học sinh thực hành trên lớp, phát hiện và sửa lỗi logic trong quá trình làm bài tập.",
          "Nắm bắt tâm lý học viên, xây dựng môi trường học tập năng động và khơi gợi hứng thú với công nghệ.",
        ],
      },
    ],
    projects: VI_PROJECTS,
    ui: {
      pageTitle: "Võ Lâm Gia Kiệt | Hồ sơ năng lực",
      language: "Ngôn ngữ",
      avatarAlt: "Ảnh chân dung Võ Lâm Gia Kiệt",
      workExperience: "Kinh nghiệm làm việc",
      contact: "LIÊN HỆ",
      techStack: "CÔNG NGHỆ",
      school: "Đại học Sài Gòn",
      major: "Công nghệ thông tin",
      portfolio: "hồ sơ năng lực",
      projects: "dự án",
      developer: "Lập trình viên",
      projectHeading: "Dự án học tập & cá nhân",
      repository: "Mã nguồn",
    },
  },
};
