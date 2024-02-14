import { test, expect } from '@playwright/test';

//TC01 ปิดหน้าเพจเป็นภาษาไทย
test('TC01', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'th', exact: true }).click();
    await page.waitForTimeout(2000);
  });

//TC02 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้า
  test('TC02 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
      await page.waitForTimeout(2000);
    });
  
 //TC03 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพบุรุษ
  test('TC03 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพบุรุษ', async ({ page }) => {
      await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
      await page.getByRole('heading', { name: 'สุภาพบุรุษ' }).click();
      await page.waitForTimeout(2000);
    });
  

//TC04 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพบุรุษและกดดูรายละเอียดสินค้า
  test('TC04 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพบุรุษและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
      await page.getByRole('heading', { name: 'สุภาพบุรุษ' }).click();
      await page.getByRole('link', { name: 'เสื้อยืดวิทยาลัยคอมพิวเตอร์ สีดำ' }).click();
      await page.waitForTimeout(2000);
    });
  

//TC05 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพสตรีและกดดูรายละเอียดสินค้า
  test('TC05 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูเสื้อผ้าและเลือกประเภทเสื้อผ้าสุภาพสตรีและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
      await page.getByRole('heading', { name: 'สุภาพสตรี' }).getByRole('link').click();
      await page.getByRole('link', { name: 'เสื้อแขนยาวสกรีนโลโก้วิทยาลัยการคอมพิวเตอร์' }).click();
      await page.waitForTimeout(2000);
    });
  

//TC06 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูของที่ระลึกและเลือกประเภทเครื่องเขียนและกดดูรายละเอียดสินค้า
  test('TC06 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูของที่ระลึกและเลือกประเภทเครื่องเขียนและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.getByRole('link', { name: 'ของที่ระลึก' }).click();
      await page.getByRole('heading', { name: 'เครื่องเขียน' }).getByRole('link').click();
      await page.getByRole('link', { name: 'สมุดโน๊ตCP' }).first().click();
      await page.waitForTimeout(2000);
    });
  

//TC07 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูของที่ระลึกและเลือกประเภทของตกแต่งบ้านและกดดูรายละเอียดสินค้า
  test('TC07 เปิดหน้าเพจเป็นภาษาไทยและเลือกเมนูของที่ระลึกและเลือกประเภทของตกแต่งบ้านและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.getByRole('link', { name: 'ของที่ระลึก' }).click();
      await page.getByRole('heading', { name: 'ของตกแต่งบ้าน' }).getByRole('link').click();
      await page.getByRole('link', { name: 'กระบอกน้ำวิทยาลัยการคอมพิวเตอร์' }).click();
      await page.waitForTimeout(2000);
    });
  

//TC08 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษ
  test('TC08 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษ', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.waitForTimeout(2000);
  });
  
//TC09 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothes
  test('TC09 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothes', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'gb' }).click();
      await page.getByRole('link', { name: 'Clothes' }).click();
      await page.waitForTimeout(2000);
    });

//TC10 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesและเลือกประเภทMen
  test('TC10 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesและเลือกประเภทMen', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'gb' }).click();
      await page.getByRole('link', { name: 'Clothes' }).click();
      await page.getByRole('heading', { name: 'Men', exact: true }).click();
      await page.waitForTimeout(2000);
    });
  
  //TC11 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesเลือกประเภทMenและกดดูรายละเอียดสินค้า
  test('TC11 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesเลือกประเภทMenและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'gb' }).click();
      await page.getByRole('link', { name: 'Clothes' }).click();
      await page.getByRole('heading', { name: 'Men', exact: true }).click();
      await page.getByRole('link', { name: 'Computer College T-shirt, black' }).click();
      await page.waitForTimeout(2000);
    });

//TC12 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesเลือกประเภทWomenและกดดูรายละเอียดสินค้า
  test('TC12 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูClothesเลือกประเภทWomenและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'gb' }).click();
      await page.getByRole('link', { name: 'Clothes' }).click();
      await page.getByRole('heading', { name: 'Women', exact: true }).click();
      await page.getByRole('link', { name: 'Long-sleeves shirt with a round neck and a College of Computing design.' }).click();
      await page.waitForTimeout(2000);
  });

// TC13 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูSouvenirเลือกประเภทStationeryและกดดูรายละเอียดสินค้า 
  test('TC13 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูSouvenirเลือกประเภทStationeryและกดดูรายละเอียดสินค้า', async ({ page }) => {
    await page.goto('http://localhost:8080/th/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.getByRole('link', { name: 'Souvenir' }).click();
    await page.getByRole('heading', { name: 'Stationery' }).click();
    await page.getByRole('link', { name: 'CP notebook' }).first().click();
    await page.waitForTimeout(2000);
  });

// TC14 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูSouvenirเลือกประเภท Home Accessories และกดดูรายละเอียดสินค้า
  test('TC14 เปิดหน้าเพจเปลี่ยนเป็นภาษาอังกฤษเลือกเมนูSouvenirเลือกประเภท Home Accessories และกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'gb' }).click();
      await page.getByRole('link', { name: 'Souvenir' }).click();
      await page.getByRole('heading', { name: 'Home Accessories' }).getByRole('link').click();
      await page.getByRole('link', { name: 'College Of Computing Tumblert' }).first().click();
      await page.waitForTimeout(2000);
  });
  
// TC15 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซีย
  test('TC15 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซีย', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.waitForTimeout(2000);
    });
  
// TC16 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaian
  test('TC16 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaian', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.getByRole('link', { name: 'Pakaian' }).click();
      await page.waitForTimeout(2000);
    });

// TC17 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaianและเลือกประเภทpriaและกดดูรายละเอียดสินค้า
  test('TC17 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaianและเลือกประเภทpriaและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.getByRole('link', { name: 'Pakaian' }).click();
      await page.getByRole('heading', { name: 'pria' }).getByRole('link').click();
      await page.getByRole('link', { name: 'Kaos Computer College, hitam' }).first().click();
      await page.waitForTimeout(2000);
    });
  
// TC18 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaianและเลือกประเภทWanitaและกดดูรายละเอียดสินค้า
  test('TC18 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูPakaianและเลือกประเภทWanitaและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.getByRole('link', { name: 'Pakaian' }).click();
      await page.getByRole('heading', { name: 'Wanita' }).getByRole('link').click();
      await page.getByRole('link', { name: 'Kemeja lengan panjang dengan' }).click();
      await page.waitForTimeout(2000);
    });
  
//TC19 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูoleh-olehและเลือกประเภทAlat tulisและกดดูรายละเอียดสินค้า
  test('TC19 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูoleh-olehและเลือกประเภทAlat tulisและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.getByRole('link', { name: 'oleh-oleh' }).click();
      await page.getByRole('heading', { name: 'Alat tulis' }).getByRole('link').click();
      await page.getByRole('link', { name: 'buku catatan CP' }).first().click();
      await page.waitForTimeout(2000);
  });

//TC20 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูoleh-olehและเลือกประเภทAksesoris Rumahและกดดูรายละเอียดสินค้า
  test('TC20 เปิดหน้าเพจเปลี่ยนเป็นอินโดนีเซียเลือกเมนูoleh-olehและเลือกประเภทAksesoris Rumahและกดดูรายละเอียดสินค้า', async ({ page }) => {
      await page.goto('http://localhost:8080/th/');
      await page.getByRole('link', { name: 'id' }).click();
      await page.getByRole('link', { name: 'oleh-oleh' }).click();
      await page.getByRole('heading', { name: 'Aksesoris Rumah' }).getByRole('link').click();
      await page.getByRole('link', { name: 'Perguruan Tinggi Komputasi Tumbler' }).click();
      await page.waitForTimeout(2000);
  });
  
