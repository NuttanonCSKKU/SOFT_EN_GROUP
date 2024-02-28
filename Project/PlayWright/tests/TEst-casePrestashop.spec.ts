import { test, expect } from '@playwright/test';
//--------TS01เช็คHeadingสินค้ายอดนิยมเมื่อเปลี่ยนภาษา
test('TC01 เปลี่ยนภาษาเป็นไทยและเช็คHeaddingต้องเป็นภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible();
});

test('TC02 เปลี่ยนภาษาเป็นอังกฤษและเช็คHeadingต้องเป็นภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('heading', { name: 'Popular Products' })).toBeVisible();
});

test('TC03 เปลี่ยนภาษาเป็นอินโดและเช็คHeadingต้องเป็นภาษาอินโด', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('heading', { name: 'Produk Populer' })).toBeVisible();
});

//-----------TS02 เช็คข้อมูลต่างๆในหน้ารายระเอียดสินค้า เมื่อเปลี่ยนภาษา
test('TC04 เข้าเว็บและเลือกดูรายระเอียดสินค้าภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await expect(page.getByRole('link', { name: 'เสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'เสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ' }).first().click();
  await expect(page.getByRole('heading', { name: 'เสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ' })).toBeVisible();
  await expect(page.getByText('รายละเอียด รายละเอียดสินค้า สัญลักษณ์ของวิทยาลัยคอมพิวเตอร์ คอลเลกชัน College')).toBeVisible();
});

test('TC05 เข้าเว็บและเลือกภาษาอินโดและดูรายละเอียดเสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByText('Kaos Computer College, hitam').first()).toBeVisible();
  await page.locator('.thumbnail').first().click();
  await expect(page.getByRole('heading', { name: 'Kaos Computer College, hitam' })).toBeVisible();
  await expect(page.getByText('Simbol Sekolah Tinggi')).toBeVisible();
});

test('TC06 เข้าเว็บและเลือกภาษาอังกฤษและดูรายละเอียดเสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('link', { name: 'Computer College T-shirt, black' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Computer College T-shirt, black' }).first().click();
  await expect(page.getByRole('heading', { name: 'Computer College T-shirt,' })).toBeVisible();
  await expect(page.getByText('Symbol of the College of')).toBeVisible();
});
//-----------TS03 หน้ารายละเอียดสินค้าเสื้อแขนยาวและดูรายละเอียด เมื่อเปลี่ยนภาษา
test('TC07 เข้าไปที่หน้ารายละเอียดสินค้าเสื้อแขนยาวและดูรายละเอียดภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/women/2-9-brown-bear-printed-sweater.html#/1-khnad-s');
  await expect(page.getByRole('link', { name: 'Computer College T-shirt, black' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Computer College T-shirt, black' }).first().click();
  await expect(page.getByRole('heading', { name: 'Computer College T-shirt,' })).toBeVisible();
  await expect(page.getByText('Symbol of the College of')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'เสื้อแขนยาวสกรีนโลโก้วิทยาลัยการคอมพิวเตอร์' })).toBeVisible();
  await expect(page.locator('#product-description-short-2').getByText('ทรงพอดีตัว คอกลม แขนยาว ผ้าฝ้าย 100% ด้านในบุขนด้านในเพื่อความสบายเป็นพิเศษ')).toBeVisible();
  await expect(page.getByText('คอลเลกชัน โลโก้วิทยาลัยการคอมพิวเตอร์ขนาดใหญ่ ของ วิทยาลัยการคอมพิวเตอร์ นำเสนอผ')).toBeVisible();
});

test('TC08 เข้าไปที่หน้ารายละเอียดสินค้าเสื้อแขนยาวและดูรายละเอียดภาษาอินโด', async ({ page }) => {
    await page.goto('http://localhost:8080/th/women/2-9-brown-bear-printed-sweater.html#/1-khnad-s');
    await page.getByRole('link', { name: 'id' }).click();
    await expect(page.getByRole('heading', { name: 'Kemeja lengan panjang dengan' })).toBeVisible();
    await expect(page.locator('#product-description-short-2').getByText('Regular fit, garis leher')).toBeVisible();
    await expect(page.getByText('Koleksi logo besar Sekolah')).toBeVisible();
  });

  test('TC09 เข้าไปที่หน้ารายละเอียดสินค้าเสื้อแขนยาวและดูรายละเอียดภาษาอังกฤษ', async ({ page }) => {
    await page.goto('http://localhost:8080/th/women/2-brown-bear-printed-sweater.html');
    await page.getByRole('link', { name: 'gb' }).click();
    await expect(page.getByRole('heading', { name: 'Long-sleeves shirt with a' })).toBeVisible();
    await expect(page.locator('#product-description-short-2').getByText('Regular fit, round neckline,')).toBeVisible();
    await expect(page.getByText('Collection of large logos of')).toBeVisible();
  });
//----------TS04 เช็คหน้ารายละเอียดสินค้าแก้วน้ำ เมื่อเปลี่ยนภาษา
test('TC10 เข้าไปที่หน้ารายละเอียดสินค้าแก้วน้ำภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/home-accessories/6-mug-the-best-is-yet-to-come.html');
  await expect(page.getByRole('heading', { name: 'กระบอกน้ำวิทยาลัยการคอมพิวเตอร์' })).toBeVisible();
  await expect(page.locator('#product-description-short-6').getByText('กระบอกน้ำสีขาว. 850มล')).toBeVisible();
  await expect(page.getByText('กระบอกน้ำสวยๆ จากวิทยาลัยคอมพิวเตอร์')).toBeVisible();
});

test('TC11 เข้าไปที่หน้ารายละเอียดสินค้าแก้วน้ำเปลี่ยนเป็นภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/home-accessories/6-mug-the-best-is-yet-to-come.html');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('heading', { name: 'College Of Computing Tumblert' })).toBeVisible();
  await expect(page.locator('#product-description-short-6').getByText('White Tumbler. 850ml')).toBeVisible();
  await expect(page.getByText('A beautiful tumbler from the')).toBeVisible();
});

test('TC12 เข้าไปที่หน้ารายละเอียดสินค้าแก้วน้ำเปลี่ยนเป็นภาษาอินโด', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/home-accessories/6-mug-the-best-is-yet-to-come.html');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('heading', { name: 'Perguruan Tinggi Komputasi' })).toBeVisible();
  await expect(page.locator('#product-description-short-6').getByText('gelas putih. 850ml')).toBeVisible();
  await expect(page.getByText('Tumbler cantik dari College')).toBeVisible();
});
//----------TS05 เช็คหน้ารายละเอียดสินค้าสมุดโน๊ตCP เมื่อเปลี่ยนภาษา
test('TC13 เข้าไปที่หน้ารายละเอียดสินค้าสมุดโน๊ตCPภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/stationery/18-hummingbird-notebook.html');
  await expect(page.getByRole('heading', { name: 'สมุดโน๊ตCP' })).toBeVisible();
  await expect(page.locator('#product-description-short-18').getByText('สมุดโน๊ตปกแข็ง 120')).toBeVisible();
  await expect(page.getByText('สมุดบันทึก CP')).toBeVisible();
});

test('TC14 เข้าไปที่หน้ารายละเอียดสินค้าสมุดโน๊ตCPเป็นภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/stationery/18-hummingbird-notebook.html');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('heading', { name: 'CP notebook' })).toBeVisible();
  await expect(page.locator('#product-description-short-18').getByText('120 sheets notebook with hard')).toBeVisible();
  await expect(page.getByText('CP Notebook is the best')).toBeVisible();
});

test('TC15 เข้าไปที่หน้ารายละเอียดสินค้าสมุดโน๊ตCPเป็นภาษาอินโด', async ({ page }) => {
  await page.goto('http://localhost:8080/th/stationery/18-hummingbird-notebook.html');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('heading', { name: 'buku catatan CP' })).toBeVisible();
  await expect(page.locator('#product-description-short-18').getByText('Buku catatan 120 lembar')).toBeVisible();
  await expect(page.getByText('CP Notebook adalah pilihan')).toBeVisible();
});
//----------TS06 เช็คหน้าหมวดหมู่สินค้าเสื้อผ้าและเช็คคำในหน้าเสื้อผ้า เมื่อเปลี่ยนภาษา
test('TC16 เข้าไปที่หน้าหมวดหมู่สินค้าเสื้อผ้าและเช็คคำในหน้าเสื้อผ้าภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
  await expect(page.getByRole('heading', { name: 'เสื้อผ้า' })).toBeVisible();
  await expect(page.getByText('แฟชั่นสุดโปรดของเรา ไอเท็มเจ๋งๆ ที่คัดสรรมาเพื่อรวมเข้ากับตู้เสื้อผ้าของคุณ แต่งสไตล์ไม่ซ้ำใครด้วยสไตล์ที่เข้ากับตัวคุณ')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'หมวดย่อย' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'สุภาพบุรุษ' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'สุภาพสตรี' })).toBeVisible();
  await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible();
  await expect(page.getByLabel('จัดเรียงตามการเลือก')).toBeVisible();
});

test('TC17 เข้าไปที่หน้าหมวดหมู่สินค้าเสื้อผ้าและเช็คคำในหน้าเสื้อผ้าภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/3-clothes');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('heading', { name: 'Clothes' })).toBeVisible();
  await expect(page.getByText('Discover our favorites fashionable discoveries, a selection of cool items to integrate in your wardrobe. Compose a unique style with personality which matches your own.')).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Men', exact: true })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Women' })).toBeVisible();
  await expect(page.getByText('Suppliers')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Brands' })).toBeVisible();
});

test('TC18 เข้าไปที่หน้าหมวดหมู่สินค้าเสื้อผ้าและเช็คคำในหน้าเสื้อผ้าภาษาอินโด', async ({ page }) => {
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('heading', { name: 'Pakaian' })).toBeVisible();
  await expect(page.getByText('Temukan penemuan fashion favorit kami, seleksi item keren untuk diintegrasikan ke dalam lemari pakaian Anda. Rangkai gaya unik dengan kepribadian yang sesuai dengan Anda sendiri.')).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'pria' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Wanita' })).toBeVisible();
  await expect(page.getByText('Pemasok')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Merek' })).toBeVisible();
});
//-----------TS07 เข้าเช็คไปที่หน้าหมวดหมู่ของที่ระลึกและเช็คคำในหน้าของที่ระลึก เมื่อเปลี่ยนภาษา
test('TC19 เข้าไปที่หน้าหมวดหมู่ของที่ระลึกและเช็คคำในหน้าของที่ระลึกภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'ของที่ระลึก' }).click();
  await expect(page.getByRole('heading', { name: 'ของที่ระลึก' })).toBeVisible();
  await expect(page.getByText('เพิ่มความสวยงามให้กับโต๊ะทำงานของคุณด้วยของที่ระลึกจากวิทยาลัยวิทยาการคอมพิวเตอร์')).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'เครื่องเขียน' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'ของตกแต่งบ้าน' })).toBeVisible();
  await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible();
});

test('TC20 เข้าไปที่หน้าหมวดหมู่ของที่ระลึกและเช็คคำในหน้าของที่ระลึกภาษาอินโด', async ({ page }) => {
  await page.goto('http://localhost:8080/th/6-accessories');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('heading', { name: 'oleh-oleh' })).toBeVisible();
  await expect(page.getByText('Percantik meja kerja Anda')).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Alat tulis' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Aksesoris Rumah' })).toBeVisible();
  await expect(page.getByText('Pemasok')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Merek' })).toBeVisible();
});

test('TC21 เข้าไปที่หน้าหมวดหมู่ของที่ระลึกและเช็คคำในหน้าของที่ระลึกภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/6-accessories');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('heading', { name: 'Souvenir' })).toBeVisible();
  await expect(page.getByText('Beautify your work desk with')).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Stationery' })).toBeVisible();
  await expect(page.locator('#left-column').getByRole('link', { name: 'Home Accessories' })).toBeVisible();
  await expect(page.getByText('Suppliers')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Brands' })).toBeVisible();
});
//-----------TS08 เข้าเช็คหน้าหลักและเช็คคำ เมื่อเปลี่ยนภาษา
test('TC22 เข้าหน้าหลักและเช็คคำในภาษาไทย', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await expect(page.getByRole('link', { name: 'เสื้อผ้า' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'ของที่ระลึก' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'เสื้อยืดวิทยาลัยคอมพิวเตอร์...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'เสื้อแขนยาวสกรีนโลโก้วิทยาล...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'กระบอกน้ำวิทยาลัยการคอมพิวเ' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'สมุดโน๊ตCP' }).nth(1)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'กำลังลดราคา' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'สินค้าใหม่' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'สินค้าทั้งหมด ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'สินค้าลดราคาทั้งหมด ' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'ดูสินค้าใหม่ทั้งหมด ' })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: 'ข้อมูลร้านค้า' })).toBeVisible();
});

test('TC23 เข้าหน้าหลักและเช็คคำในภาษาอินโด', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'id' }).click();
  await expect(page.getByRole('link', { name: 'Pakaian' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'oleh-oleh' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Produk Populer' })).toBeVisible();
  await expect(page.getByText('Kaos Computer College, hitam').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Kemeja lengan panjang...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Perguruan Tinggi Komputasi...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'buku catatan CP' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Semua produk ' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sedang obral' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Semua produk obral ' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Produk baru' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Semua produk baru ' })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: 'Informasi toko' })).toBeVisible();
});

test('TC24 เข้าหน้าหลักและเช็คคำในภาษาอังกฤษ', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await expect(page.getByRole('link', { name: 'Clothes' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Souvenir' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Popular Products' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Computer College T-shirt,...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Long-sleeves shirt with a...' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'College Of Computing Tumblert' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'CP notebook' }).nth(1)).toBeVisible();
  await expect(page.getByRole('link', { name: 'All products ' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'On sale' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'All sale products ' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'New products' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'All new products ' })).toBeVisible();
  await expect(page.locator('p').filter({ hasText: 'Store information' })).toBeVisible();
});