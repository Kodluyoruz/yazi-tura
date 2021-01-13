### Yapılan Değişiklikler

1. constant.js içerisinde yazı-tura değerlerini tutan options adlı bir array oluşturuldu.
2. helpers.js oluşturuldu ve 2 adet helper metot yazıldı.
   - Bir array içinden rastgele eleman seçen bir metot
   - Bir array içindeki aranan değerin toplam kaç tane olduğunu bulan bir metot
3. CoinFlipper içindeki state'te "side" tura yerine artık options array'inin 0. elemanını tutuyor.
4. CoinFlipper içindeki state'e rastgele seçilen yazı-tura bilgilerini tutmak için "flips" eklendi. Bu array'in length'i kullanılarak dinamik olarak toplam atış sayısı bulunuyor.
5. Options array'inde map yapıldıktan sonra findTotal fonksiyonu sayesinde kaç yazı kaç tura geldiği bulunuyor ve dinamik olarak gösteriliyor.
