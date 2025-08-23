import React from "react";
import { Container } from "react-bootstrap";
import { useLanguage } from "../../context/languageContext";
import { useTheme } from "../../context/themeContext";

const AboutDetail = () => {
  const { t } = useLanguage();
  const { themeStyle } = useTheme();
  return (
    <Container>
      <div
        className="mt-5 p-5 border-2 rounded"
        style={{ color: themeStyle.text }}
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 mt-5">
          {t("page.aboutme_detail") || "Chi tiết về tôi"}
          <span
            style={{
              flex: 1,
              borderBottom: "3px solid #cfc08a",
              marginLeft: 12,
            }}
          ></span>
        </h2>
        <p className="mt-4 text-lg">
          {/* Thêm nội dung chi tiết về bản thân ở đây */}
          Đây là trang chi tiết về bản thân bạn. Bạn có thể thêm thông tin về
          quá trình học tập, kinh nghiệm, dự án, mục tiêu nghề nghiệp, kỹ năng
          chuyên sâu, v.v...
        </p>
      </div>
    </Container>
  );
};

export default AboutDetail;
