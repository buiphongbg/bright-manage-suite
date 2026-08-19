export type Quote = {
  id: string;
  stt: number;
  soBG: string;
  phieuTNTM?: string;
  ngayTao: string;
  khachHang: string;
  nguoiLap: string;
  trangThai: "Mới tạo" | "Chờ duyệt" | "Đã duyệt" | "Phát hành" | "Đã hủy" | "Hết hiệu lực";
  hoaDon: string;
  tongTien: number;
};

export const quotes: Quote[] = [
  { id: "4607.26", stt: 1, soBG: "4607.26", ngayTao: "10-08-2026", khachHang: "Nhà máy sản xuất bao bì Jumbo Tú Phương", nguoiLap: "PĐL Lực", trangThai: "Mới tạo", hoaDon: "Chưa có", tongTien: 15330000 },
  { id: "4606.26", stt: 2, soBG: "4606.26", ngayTao: "10-08-2026", khachHang: "Viện khoa học vật liệu", nguoiLap: "PĐL Lực", trangThai: "Chờ duyệt", hoaDon: "Chưa có", tongTien: 25620000 },
  { id: "4604.26", stt: 3, soBG: "4604.26", ngayTao: "10-08-2026", khachHang: "Viện khoa học vật liệu", nguoiLap: "PĐL Lực", trangThai: "Đã duyệt", hoaDon: "Chưa có", tongTien: 12075000 },
  { id: "4603.26", stt: 4, soBG: "4603.26", ngayTao: "10-08-2026", khachHang: "CÔNG TY TRÁCH NHIỆM HỮU HẠN KPF VIỆT NAM", nguoiLap: "PĐL Lực", trangThai: "Mới tạo", hoaDon: "Chưa có", tongTien: 12075000 },
  { id: "4601.26", stt: 5, soBG: "4601.26", ngayTao: "10-08-2026", khachHang: "Phòng thí nghiệm trọng điểm đường bộ I - Viện khoa học và công nghệ giao thông vận tải", nguoiLap: "PĐL Lực", trangThai: "Chờ duyệt", hoaDon: "Chưa có", tongTien: 12600000 },
  { id: "4593.26", stt: 6, soBG: "4593.26", phieuTNTM: "4521.26", ngayTao: "07-08-2026", khachHang: "CÔNG TY TNHH KIỂM ĐỊNH AN TOÀN IDS VIỆT NAM", nguoiLap: "PĐL Lực", trangThai: "Phát hành", hoaDon: "Chưa có", tongTien: 3150000 },
  { id: "4590.26", stt: 7, soBG: "4590.26", ngayTao: "07-08-2026", khachHang: "Công ty TNHH LMS Technologies Việt Nam", nguoiLap: "PĐL Lực", trangThai: "Phát hành", hoaDon: "Đã xuất", tongTien: 8400000 },
  { id: "4541.26", stt: 8, soBG: "4541.26", ngayTao: "05-08-2026", khachHang: "CÔNG TY TNHH SỬA CHỮA TÀU-DỊCH VỤ HÀNG HẢI VÀ THƯƠNG MẠI SAO BIỂN", nguoiLap: "PĐL Lực", trangThai: "Đã hủy", hoaDon: "Chưa có", tongTien: 4200000 },
  { id: "4540.26", stt: 9, soBG: "4540.26", ngayTao: "05-08-2026", khachHang: "Công ty TNHH CTR Vina", nguoiLap: "PĐL Lực", trangThai: "Phát hành", hoaDon: "Đã xuất", tongTien: 9450000 },
  { id: "4503.26", stt: 10, soBG: "4503.26", ngayTao: "03-08-2026", khachHang: "CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ KỸ THUẬT M.D", nguoiLap: "PĐL Lực", trangThai: "Hết hiệu lực", hoaDon: "Chưa có", tongTien: 126000000 },
  { id: "4622.26", stt: 11, soBG: "4622.26", ngayTao: "10-08-2026", khachHang: "CÔNG TY TNHH MỘT THÀNH VIÊN CƠ KHÍ HÀ NỘI", nguoiLap: "PĐL Lực", trangThai: "Đã duyệt", hoaDon: "Chưa có", tongTien: 3150000 },
];

export type QuoteLine = {
  key: string;
  stt: number;
  tenMau: string;
  dacTrung: string;
  soLuong: number;
  donGia: number;
  vat: string;
  thanhTien: number;
  noiTH: string;
  pdl: string;
  kvpn: string;
  gcn: string;
  in: string;
};

export type QuoteDetail = {
  id: string;
  loaiBaoGia: string;
  soBaoGia: string;
  ngayTao: string;
  khachHang: string;
  nguoiLienHe: string;
  nguoiLap: string;
  ghiChu: string;
  trangThai: string;
  hopDongNguyenTac: string;
  hanDen: string;
  diaChi: string;
  dienThoai: string;
  nguoiDuyet: string;
  thaoTac: string;
  lines: QuoteLine[];
};

export const quoteDetails: Record<string, QuoteDetail> = {
  default: {
    id: "4622.26",
    loaiBaoGia: "Đo lường",
    soBaoGia: "4622.26",
    ngayTao: "10-08-2026",
    khachHang: "CÔNG TY TNHH MỘT THÀNH VIÊN CƠ KHÍ HÀ NỘI",
    nguoiLienHe: "",
    nguoiLap: "PĐL Lực",
    ghiChu: "",
    trangThai: "Mới tạo",
    hopDongNguyenTac: "Không có",
    hanDen: "10-06-2027",
    diaChi: "Số 76, đường Nguyễn Trãi, Phường Thanh Xuân, TP Hà Nội, Việt Nam - Hà Nội",
    dienThoai: "",
    nguoiDuyet: "",
    thaoTac: "[2026-08-10 08:47:10 - PĐL Lực] tạo báo giá",
    lines: [
      { key: "1", stt: 1, tenMau: "Hiệu chuẩn Máy thử va đập", dacTrung: "", soLuong: 1, donGia: 3000000, vat: "5%", thanhTien: 3150000, noiTH: "VMI", pdl: "V03", kvpn: "Không", gcn: "Có", in: "Có" },
    ],
  },
};

export function getQuoteDetail(id: string): QuoteDetail {
  const q = quotes.find((x) => x.id === id);
  const base = quoteDetails["default"]!;
  if (!q) return base;
  const donGia = Math.round(q.tongTien / 1.05);
  return {
    ...base,
    id: q.id,
    soBaoGia: q.soBG,
    ngayTao: q.ngayTao,
    khachHang: q.khachHang,
    nguoiLap: q.nguoiLap,
    trangThai: q.trangThai,
    lines: [{ ...base.lines[0]!, donGia, thanhTien: q.tongTien }],
  };
}

export type SampleSlipItem = {
  key: string;
  stt: number;
  tenMau: string;
  dacTrung: string;
  soSerial: string;
  sl: number;
  noiDungPDL: string;
  loaiGCN: string;
  gcn: string;
  trangThaiGCN: string;
  tinhTrangMau: string;
  pdl: string;
  ngayCanTra: string;
  highlight?: boolean;
};

export type SampleSlip = {
  id: string;
  soPhieu: string;
  ngayTiepNhan: string;
  duKienTraMau: string;
  ngayPDLTraMau: string;
  noiTH: string;
  hieuLucGCN: string;
  hieuChinh: string;
  trangThai: string;
  tenKH: string;
  dcCSSD: string;
  maSoThue: string;
  nguoiGiaoMau: string;
  dienThoai: string;
  phuongPhap: string;
  hinhThucGiaoMau: string;
  thaoTac: string;
  items: SampleSlipItem[];
};

export const sampleSlips: SampleSlip[] = [
  {
    id: "4538.26",
    soPhieu: "4538.26",
    ngayTiepNhan: "10-08-2026",
    duKienTraMau: "19-08-2026",
    ngayPDLTraMau: "18-08-2026",
    noiTH: "VMI",
    hieuLucGCN: "Có",
    hieuChinh: "Không",
    trangThai: "Mới tạo",
    tenKH: "CÔNG TY CỔ PHẦN DỊCH VỤ SỬA CHỮA NHIỆT ĐIỆN MIỀN BẮC",
    dcCSSD: "Số 85 Phố Lục Đầu Giang - Phường Phả Lại - Thành phố Chí Linh – Tỉnh Hải Dương.",
    maSoThue: "0800383471",
    nguoiGiaoMau: "Nguyễn Đắc Sơn",
    dienThoai: "02203.582.909",
    phuongPhap: "Không",
    hinhThucGiaoMau: "Trực tiếp",
    thaoTac: "[2026-08-10 08:47:45 - Nguyễn Mai Hiên] nhập thiết bị",
    items: [
      { key: "1", stt: 1, tenMau: "Thiết bị thử nghiệm nhất thứ CPC 100 (PG128W)", dacTrung: "Điện áp AC/DC, Dòng điện AC/DC, Điện trở, Thời gian: 15 giây, 30 giây-1, 5, 10, 15, 45 phút", soSerial: "", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026" },
      { key: "2", stt: 2, tenMau: "Thiết bị tạo dòng điện sơ cấp ODEN AT\n(SN: 9580391)", dacTrung: "Điện áp AC, Dòng điện AC, Thời gian: 15 giây, 30 giây-1, 5, 10, 15, 45 phút", soSerial: "", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026" },
      { key: "3", stt: 3, tenMau: "Thiết bị thử cao áp AC UPU-10\n(SN: 1501)", dacTrung: "Điện áp cao AC/DC, Dòng điện AC/DC, Thời gian: 15 giây, 30 giây-1, 5, 10, 15 phút", soSerial: "", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026" },
      { key: "4", stt: 4, tenMau: "Thiết bị thử nghiệm rơ le Mentor 12\n(SN: 110153)", dacTrung: "Điện áp AC/DC; Dòng điện AC/DC; Tần số, góc pha, thời gian 1 giây, 5 giây, 10 giây, 15 giây, 30 giây-1, 5, 10, 15, 45 phút", soSerial: "", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026", highlight: true },
      { key: "5", stt: 5, tenMau: "Hợp bộ thí nghiệm CMC 356\n(SN: MG3210)", dacTrung: "Điện áp AC/DC; Dòng điện AC/DC; Tần số, góc pha, thời gian", soSerial: "", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026" },
      { key: "6", stt: 6, tenMau: "Thiết bị đo điện trở tiếp địa MI 3290", dacTrung: "Điện trở tiếp địa, điện áp AC", soSerial: "MI 3290-118", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V07", ngayCanTra: "18-08-2026" },
    ],
  },
  {
    id: "4521.26",
    soPhieu: "4521.26",
    ngayTiepNhan: "07-08-2026",
    duKienTraMau: "17-08-2026",
    ngayPDLTraMau: "16-08-2026",
    noiTH: "VMI",
    hieuLucGCN: "Có",
    hieuChinh: "Không",
    trangThai: "Mới tạo",
    tenKH: "CÔNG TY TNHH KIỂM ĐỊNH AN TOÀN IDS VIỆT NAM",
    dcCSSD: "Số 12, đường Trần Duy Hưng, phường Trung Hoà, TP Hà Nội",
    maSoThue: "0107702523",
    nguoiGiaoMau: "Trần Văn Hùng",
    dienThoai: "0912 345 678",
    phuongPhap: "Không",
    hinhThucGiaoMau: "Trực tiếp",
    thaoTac: "[2026-08-07 09:12:03 - Nguyễn Mai Hiên] nhập thiết bị",
    items: [
      { key: "1", stt: 1, tenMau: "Máy thử va đập", dacTrung: "Năng lượng 300 J", soSerial: "VD-2211", sl: 1, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V03", ngayCanTra: "16-08-2026" },
      { key: "2", stt: 2, tenMau: "Thước cặp điện tử", dacTrung: "0 ~ 150 mm", soSerial: "TC-0091", sl: 2, noiDungPDL: "", loaiGCN: "HC", gcn: "", trangThaiGCN: "Chưa có", tinhTrangMau: "", pdl: "V03", ngayCanTra: "16-08-2026", highlight: true },
    ],
  },
];

export function getSampleSlip(id: string): SampleSlip {
  return sampleSlips.find((s) => s.id === id) ?? sampleSlips[0]!;
}

export type Certificate = {
  key: string;
  stt: number;
  soBG: string;
  phieuTNTM: string;
  tenMau: string;
  dacTrung: string;
  soSerial: string;
  pdl: string;
  soGCN: string;
  trangThaiGCN: string;
  temKD: string;
  donGia: number;
  ngayCap: string;
  hieuLuc: string;
};

export const certificates: Certificate[] = [
  { key: "1", stt: 1, soBG: "2506.18", phieuTNTM: "1601.18", tenMau: "Nhiệt ẩm kế cơ", dacTrung: "TH101E", soSerial: "", pdl: "V10", soGCN: "V10.CN5.838.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 800000, ngayCap: "14-05-2018", hieuLuc: "31-05-2019" },
  { key: "2", stt: 2, soBG: "2511.18", phieuTNTM: "1602.18", tenMau: "PTĐ Kiểm tra tốc độ phương tiện giao thông", dacTrung: "Tru Speed", soSerial: "TJ002881", pdl: "V08", soGCN: "V08.KĐ.186.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 3000000, ngayCap: "08-05-2018", hieuLuc: "31-05-2019" },
  { key: "3", stt: 3, soBG: "2512.18", phieuTNTM: "1603.18", tenMau: "PTĐ kiểm tra tốc độ phương tiện giao thông", dacTrung: "Ultra Lyte", soSerial: "UL002151", pdl: "V08", soGCN: "V08.KĐ.189.18", trangThaiGCN: "Phát hành", temKD: "17A 19591", donGia: 3000000, ngayCap: "08-05-2018", hieuLuc: "31-05-2019" },
  { key: "4", stt: 4, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Cân so sánh", dacTrung: "MC-30K", soSerial: "14909304", pdl: "V02", soGCN: "V02.CN5.6138.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 2000000, ngayCap: "14-05-2018", hieuLuc: "31-05-2019" },
  { key: "5", stt: 5, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Bộ quả cân F2", dacTrung: "1 g ~ 500 g", soSerial: "G 1824559", pdl: "V02", soGCN: "V02.CN5.3172.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 1500000, ngayCap: "10-05-2018", hieuLuc: "31-05-2019" },
  { key: "6", stt: 6, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Bộ quả cân F2", dacTrung: "1 kg ~ 20 kg", soSerial: "G 1824560, G 1824561 ; G 1824562, G 1824563, G 1824564, G 1824570", pdl: "V02", soGCN: "V02.CN5.3173.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 2000000, ngayCap: "10-05-2018", hieuLuc: "31-05-2019" },
  { key: "7", stt: 7, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Bộ quả cân E2", dacTrung: "1g ~ 200 g", soSerial: "G 1824571", pdl: "V02", soGCN: "V02.CN5.3174.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 9000000, ngayCap: "10-05-2018", hieuLuc: "31-05-2020" },
  { key: "8", stt: 8, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Bộ quả cân F1", dacTrung: "1 mg ~ 500 mg", soSerial: "G 1824565", pdl: "V02", soGCN: "V02.CN5.3171.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 2000000, ngayCap: "10-05-2018", hieuLuc: "31-05-2019" },
  { key: "9", stt: 9, soBG: "2508.18", phieuTNTM: "1604.18", tenMau: "Bộ quả cân F1", dacTrung: "1 g ~ 5 kg", soSerial: "G 1824568", pdl: "V02", soGCN: "V02.CN5.3170.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 8400000, ngayCap: "10-05-2018", hieuLuc: "31-05-2019" },
  { key: "10", stt: 10, soBG: "2515.18", phieuTNTM: "1605.18", tenMau: "PTĐ hàm lượng cồn trong hơi thở", dacTrung: "", soSerial: "855841", pdl: "V06", soGCN: "V06.KĐ.4321.18", trangThaiGCN: "Phát hành", temKD: "17A 03005", donGia: 2500000, ngayCap: "23-05-2018", hieuLuc: "31-05-2019" },
  { key: "11", stt: 11, soBG: "2516.18", phieuTNTM: "1606.18", tenMau: "Cân phân tích", dacTrung: "220 g / 0,1 mg", soSerial: "B740123456", pdl: "V02", soGCN: "V02.CN5.3180.18", trangThaiGCN: "Phát hành", temKD: "", donGia: 1200000, ngayCap: "25-05-2018", hieuLuc: "31-05-2019" },
  { key: "12", stt: 12, soBG: "2518.18", phieuTNTM: "1607.18", tenMau: "Áp kế lò xo", dacTrung: "0 ~ 25 MPa", soSerial: "AK-1122", pdl: "V05", soGCN: "V05.CN5.0771.18", trangThaiGCN: "Phát hành", temKD: "17A 03110", donGia: 600000, ngayCap: "28-05-2018", hieuLuc: "31-05-2019" },
];

export type Customer = {
  key: string;
  stt: number;
  ma: string;
  ten: string;
  diaChi: string;
  tinh: string;
  maSoThue: string;
  dt: string;
  lienHe: string;
  loaiHinh: string;
};

export const customers: Customer[] = [
  { key: "1", stt: 1, ma: "01.22", ten: "Doanh nghiệp tư nhân Vĩnh Hưng", diaChi: "", tinh: "Hà Nội", maSoThue: "", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "2", stt: 2, ma: "011.22", ten: "Laboratory of Environment and Food Safety - Institute Pasteur du Cambodge", diaChi: "5, Monivong blvd - PO Box 983, Phnom Penh, Cambodia", tinh: "Hà Nội", maSoThue: "", dt: "", lienHe: "(+855) 011 777 195", loaiHinh: "Nước ngoài" },
  { key: "3", stt: 3, ma: "015.22", ten: "Công ty cổ phần Nippon Sanso Việt Nam", diaChi: "Số 33, Đường 3A, KCN Biên Hòa II, phường An Bình, thành phố Biên Hoà", tinh: "Đồng Nai", maSoThue: "3600258422", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "4", stt: 4, ma: "017.22", ten: "Trung tâm Nghiên cứu và Ứng dụng công nghệ truyền thông", diaChi: "Số 58 Quán sứ, phường Hàng bông, quận Hoàn kiếm", tinh: "Hà Nội", maSoThue: "01022222668", dt: "", lienHe: "", loaiHinh: "Đơn vị nhà nước" },
  { key: "5", stt: 5, ma: "018.20", ten: "Công ty cổ phần Viết Thành", diaChi: "Xưởng cơ khí Xuân Thành, phố Đầu Long, phường Tân Thành", tinh: "Ninh Bình", maSoThue: "2700340220", dt: "0917677373", lienHe: "A.Sơn", loaiHinh: "Doanh nghiệp" },
  { key: "6", stt: 6, ma: "018.22", ten: "Viện kiểm nghiệm an toàn vệ sinh thực phẩm Quốc gia", diaChi: "65 Phạm Thận Duật, phường Mai Dịch, quận Cầu Giấy", tinh: "Hà Nội", maSoThue: "0103991698", dt: "", lienHe: "0911 222 211", loaiHinh: "Đơn vị nhà nước" },
  { key: "7", stt: 7, ma: "019.22", ten: "Công ty TNHH Vật tư Khoa học Kỹ Thuật", diaChi: "112 Hàm Nghi, phường Thạc Gián, quận Thanh Khê, thành phố Đà Nẵng", tinh: "Đà Nẵng", maSoThue: "0400129907", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "8", stt: 8, ma: "02.22", ten: "Công ty cơ khí TCV Việt Nam", diaChi: "Tổ dân phố Thắng lợi, phường Dương Nội, quận Hà đông", tinh: "Hà Nội", maSoThue: "0107702523", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "9", stt: 9, ma: "024.22", ten: "Công ty TNHH Thiết bị y tế ECALL", diaChi: "Số 3, ngõ 108/26, đường trần phú, phường Mộ lao, Quận Hà đông", tinh: "Hà Nội", maSoThue: "0109735919", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "10", stt: 10, ma: "028.22", ten: "Công ty TNHH Sunwave VN", diaChi: "Thôn 7, xã phùng xá, huyện thạch thất", tinh: "Hà Nội", maSoThue: "0109100531", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
  { key: "11", stt: 11, ma: "029.22", ten: "Phòng CSGT Công an tỉnh Đồng Nai", diaChi: "Số 161 Phạm Văn Thuận, phường Tân tiến, thành phố Biên Hòa", tinh: "Hà Nội", maSoThue: "", dt: "", lienHe: "", loaiHinh: "Đơn vị nhà nước" },
  { key: "12", stt: 12, ma: "03.22", ten: "Công ty TNHH thương mại và kỹ thuật Hà Thành", diaChi: "số 144 Nguyễn Bỉnh Khiêm", tinh: "Hải Phòng", maSoThue: "0201234567", dt: "", lienHe: "", loaiHinh: "Doanh nghiệp" },
];

export type ScheduleItem = {
  key: string;
  stt: number;
  qd: string;
  bg: string;
  nhanVien: string;
  khachHang: string;
  tuNgay: string;
  denNgay: string;
  noiDung: string;
  trangThai: string;
};

export const scheduleList: ScheduleItem[] = [
  { key: "1", stt: 1, qd: "V07.80", bg: "1076.26", nhanVien: "Cao Xuân Thảo ( V07 )", khachHang: "Viện khoa học vật liệu", tuNgay: "27-07-2026", denNgay: "28-07-2026", noiDung: "Hiệu chuẩn tại hiện trường", trangThai: "Đã duyệt" },
  { key: "2", stt: 2, qd: "V01.046.26", bg: "4199.26", nhanVien: "Nguyễn Thanh Tùng ( V01 )", khachHang: "Công ty TNHH CTR Vina", tuNgay: "27-07-2026", denNgay: "29-07-2026", noiDung: "Kiểm định PTĐ", trangThai: "Đã duyệt" },
  { key: "3", stt: 3, qd: "V02.054.26", bg: "4153.26", nhanVien: "Bùi Hoàng Minh ( V02 )", khachHang: "Nhà máy bao bì Jumbo Tú Phương", tuNgay: "27-07-2026", denNgay: "31-07-2026", noiDung: "Hiệu chuẩn cân", trangThai: "Mới tạo" },
  { key: "4", stt: 4, qd: "V05.999.26", bg: "077.26", nhanVien: "Vũ Khánh Phan ( V05 )", khachHang: "Viện kiểm nghiệm ATVSTP Quốc gia", tuNgay: "01-08-2026", denNgay: "08-08-2026", noiDung: "Hiệu chuẩn áp kế", trangThai: "Đã duyệt" },
  { key: "5", stt: 5, qd: "V09.054.26", bg: "3966.26", nhanVien: "Nguyễn Trần Tuấn ( V09 )", khachHang: "Công ty TNHH LMS Technologies", tuNgay: "05-08-2026", denNgay: "07-08-2026", noiDung: "Thử nghiệm không phá hủy", trangThai: "Đã duyệt" },
  { key: "6", stt: 6, qd: "V11.063.26", bg: "4542.26", nhanVien: "Ngô Quốc Thuyên ( V11 )", khachHang: "Công ty cơ khí TCV Việt Nam", tuNgay: "06-08-2026", denNgay: "08-08-2026", noiDung: "Kiểm định thiết bị nâng", trangThai: "Mới tạo" },
  { key: "7", stt: 7, qd: "V02.060.26", bg: "4186.26", nhanVien: "Bùi Hoàng Minh ( V02 )", khachHang: "Công ty cổ phần Viết Thành", tuNgay: "08-08-2026", denNgay: "10-08-2026", noiDung: "Hiệu chuẩn quả cân", trangThai: "Đã duyệt" },
  { key: "8", stt: 8, qd: "V10.095.26", bg: "4368.26", nhanVien: "Nguyễn Thu Hằng ( V10 )", khachHang: "Trung tâm NC & UD công nghệ truyền thông", tuNgay: "10-08-2026", denNgay: "12-08-2026", noiDung: "Hiệu chuẩn nhiệt ẩm kế", trangThai: "Đã duyệt" },
];

export type CalendarAssignment = { qd: string; bg: string; nv: string; blue?: boolean };

const names = [
  "Cao Xuân Thảo ( V07 )",
  "Bùi Hoàng Minh ( V02 ) , Nguyễn Thanh Tùng ( V01 )",
  "Vũ Khánh Phan ( V05 )",
  "Nguyễn Văn Đức ( V09 ) , Trần Nam Anh ( V01 )",
  "Ngô Quốc Thuyên ( V05 )",
  "Lưu Thị Hà ( V06 )",
  "Nguyễn Công Trung ( V02 ) , Nguyễn Hồng Trọng ( V02 )",
  "Trần Khắc Dương ( V04 ) , Nguyễn Thế Vượng ( V04 )",
  "Lê Thu Thủy ( TUD )",
  "Phùng Thị Thu Trang ( V02 ) , Bùi Hoàng Minh ( V02 )",
];

const codes = ["V05.999.26", "V09.999.26", "V10.999.26", "V02.057.26", "V03.999.26", "V08.999.26", "V11.061.26", "V06.999.26", "V01.047.26", "V05.173.26"];
const bgs = ["077.26", "999.26", "4107.26", "3826.26", "4289.26", "3894.26", "4187.26", "4238.26", "3654.26", "4542.26"];

/** Deterministic pseudo-assignments so the calendar looks dense like the real system. */
export function assignmentsForDay(dayIndex: number): CalendarAssignment[] {
  if (dayIndex % 7 === 5 || dayIndex % 7 === 6) return dayIndex % 13 === 6 ? [{ qd: codes[dayIndex % 10]!, bg: bgs[dayIndex % 10]!, nv: names[dayIndex % 10]!, blue: true }] : [];
  const count = 3 + ((dayIndex * 7) % 9);
  return Array.from({ length: count }, (_, i) => {
    const n = (dayIndex * 3 + i * 5) % 10;
    return {
      qd: codes[n]!,
      bg: bgs[(n + i) % 10]!,
      nv: names[(n + i * 3) % 10]!,
      blue: (dayIndex + i) % 17 === 0,
    };
  });
}

export const formatVnd = (n: number) => n.toLocaleString("vi-VN") + "đ";
