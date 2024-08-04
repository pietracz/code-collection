CREATE DATABASE 
USE 

-- @block
DROP TABLE products, customer, comments, cart, orders;
-- @block
CREATE TABLE `products` (
    `productId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `manufacturer` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NOT NULL,
    `technicalDetails` JSON NOT NULL
);
CREATE TABLE `customer` (
    `customerId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `userName` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `shippingAddress` JSON NOT NULL
);

CREATE TABLE `comments` (
    `commentId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `productId` BIGINT UNSIGNED NOT NULL,
    `customerId` BIGINT UNSIGNED NOT NULL,
    `text` TEXT NOT NULL,
    `rating` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(productId) REFERENCES products(productId),
    FOREIGN KEY(customerId) REFERENCES customer(customerId)
);

CREATE TABLE `cart` (
    `cartId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `customerId` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
);

CREATE TABLE `cartItems` (
    `cartItemId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cartId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (cartId) REFERENCES cart(cartId),
    `quantity` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (productId) REFERENCES products(productId)
);

CREATE TABLE `orders` (
    `orderId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cartId` BIGINT UNSIGNED NOT NULL,
    `customerId` BIGINT UNSIGNED NOT NULL,
    `orderDate` DATETIME NOT NULL,
    `status` ENUM('processing', 'shipped', 'delivered', 'cancelled') NOT NULL,
    `total` DECIMAL(10,2) NOT NULL,
    `paymentMethod` VARCHAR(50) NOT NULL,
    FOREIGN KEY (cartId) REFERENCES cart(cartId),
    FOREIGN KEY (customerId) REFERENCES customer(customerId)
);


-- @block
SELECT * FROM products

-- @block
INSERT INTO `customer` (`userName`, `firstName`, `lastName`, `email`, `phone`, `shippingAddress`) VALUES
('JohnDoe', 'John', 'Doe', 'john.doe@example.com', '123-456-7890', '{"street": "Hauptstraße 85", "city": "Berlin", "postalCode": "10115", "country": "Deutschland"}'),
('TechFan2024', 'Tech', 'Fan', 'tech.fan@example.com', '234-567-8901', '{"street": "Bahnhofstraße 32", "city": "Hamburg", "postalCode": "20095", "country": "Deutschland"}'),
('AndroidEnthusiast', 'Andy', 'Roid', 'andy.roid@example.com', '345-678-9012', '{"street": "Schulstraße 17", "city": "München", "postalCode": "80331", "country": "Deutschland"}'),
('PreisLeistungsFreak', 'Preis', 'Leistung', 'preis.leistung@example.com', '456-789-0123', '{"street": "Gartenstraße 5", "city": "Köln", "postalCode": "50667", "country": "Deutschland"}'),
('SpeedDemon', 'Speedy', 'Demon', 'speedy.demon@example.com', '567-890-1234', '{"street": "Waldstraße 99", "city": "Frankfurt", "postalCode": "60311", "country": "Deutschland"}'),
('FilmmakerPro', 'Filmy', 'Maker', 'filmy.maker@example.com', '678-901-2345', '{"street": "Bergstraße 22", "city": "Stuttgart", "postalCode": "70173", "country": "Deutschland"}'),
('StyleGuru', 'Stylish', 'Guru', 'stylish.guru@example.com', '789-012-3456', '{"street": "Hauptstraße 1", "city": "Berlin", "postalCode": "10115", "country": "Deutschland"}'),
('FotoFanatiker', 'Foto', 'Fan', 'foto.fan@example.com', '890-123-4567', '{"street": "Bahnhofstraße 68", "city": "Hamburg", "postalCode": "20095", "country": "Deutschland"}'),
('GamerGirl', 'Game', 'Girl', 'game.girl@example.com', '901-234-5678', '{"street": "Schulstraße 45", "city": "München", "postalCode": "80331", "country": "Deutschland"}'),
('Umweltbewusst', 'Umwelt', 'Bewusst', 'umwelt.bewusst@example.com', '012-345-6789', '{"street": "Gartenstraße 123", "city": "Köln", "postalCode": "50667", "country": "Deutschland"}'),
('iLover', 'i', 'Lover', 'i.lover@example.com', '123-456-7891', '{"street": "Waldstraße 83", "city": "Berlin", "postalCode": "80331", "country": "Deutschland"}'),
('FitFreak', 'Fit', 'Freak', 'fit.freak@example.com', '234-567-8912', '{"street": "Bahnhofstraße 3", "city": "München", "postalCode": "60311", "country": "Deutschland"}'),
('OutdoorEnthusiast', 'Outdoor', 'Enthusiast', 'outdoor.enthusiast@example.com', '345-678-9123', '{"street": "Bahnhofstraße 30", "city": "Hamburg", "postalCode": "50667", "country": "Deutschland"}'),
('WellnessGuru', 'Wellness', 'Guru', 'wellness.guru@example.com', '456-789-1235', '{"street": "Gartenstraße 89", "city": "Berlin", "postalCode": "10115", "country": "Deutschland"}'),
('BudgetShopper', 'Budget', 'Shopper', 'budget.shopper@example.com', '567-890-2346', '{"street": "Gartenstraße 16", "city": "München", "postalCode": "70173", "country": "Deutschland"}'),
('HuaweiFan', 'Huawei', 'Fan', 'huawei.fan@example.com', '678-901-3457', '{"street": "Hauptstraße 88", "city": "Köln", "postalCode": "50667", "country": "Deutschland"}'),
('Fashionista', 'Fashion', 'Ista', 'fashion.ista@example.com', '789-012-4568', '{"street": "Bahnhofstraße 56", "city": "Köln", "postalCode": "50667", "country": "Deutschland"}'),
('RunnerGirl', 'Runner', 'Girl', 'runner.girl@example.com', '890-123-5679', '{"street": "Bergstraße 4", "city": "Hamburg", "postalCode": "70173", "country": "Deutschland"}'),
('TechGeek', 'Techy', 'Geek', 'techy.geek@example.com', '901-234-6790', '{"street": "Bahnhofstraße 56", "city": "München", "postalCode": "60311", "country": "Deutschland"}'),
('MountainClimber', 'Mountain', 'Climber', 'mountain.climber@example.com', '012-345-7891', '{"street": "Bahnhofstraße 27", "city": "Berlin", "postalCode": "70173", "country": "Deutschland"}');

-- @block
-- iPhone 14 Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('iPhone 14 Pro', 'Apple', 1099.00, '[\"Polarstar\", \"RED\", \"Midnight\"]', 'Profi-Smartphone mit leistungsstarkem A16 Bionic Chip und fortschrittlichem Kamerasystem.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"iOS 16\", \"cpu\": \"A16 Bionic Chip\", \"storage\": [\"128GB\", \"256GB\", \"512GB\", \"1TB\"]}');

-- Samsung Galaxy S23 Ultra
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Samsung Galaxy S23 Ultra', 'Samsung', 1199.00, '[\"Snow\", \"Obsidian\", \"Hazel\"]', 'Das ultimative Smartphone-Erlebnis mit leistungsstarker Kamera und großem Display.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8 Gen 2\", \"storage\": [\"128GB\", \"256GB\", \"512GB\", \"1TB\"]}');

-- Google Pixel 7 Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Google Pixel 7 Pro', 'Google', 899.00, '[\"Snow\", \"Obsidian\", \"Hazel\"]', 'Pure Android-Erfahrung mit beeindruckender Kamera und cleveren Software-Features.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Google Tensor G2\", \"storage\": [\"128GB\", \"256GB\"]}');

-- Xiaomi 13 Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Xiaomi 13 Pro', 'Xiaomi', 999.00, '[\"Ceramic Black\", \"Ceramic White\", \"Flora Green\"]', 'High-End-Leistung zum fairen Preis mit schnellem Laden und vielseitiger Kamera.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8 Gen 2\", \"storage\": [\"256GB\", \"512GB\"]}');

-- OnePlus 11
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('OnePlus 11', 'OnePlus', 849.00, '[\"Eternal Green\", \"Titan Black\"]', 'Schnelles und flüssiges Smartphone-Erlebnis mit einzigartigem Design und schnellem Laden.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8 Gen 2\", \"storage\": [\"128GB\", \"256GB\"]}');

-- Sony Xperia 1 V
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Sony Xperia 1 V', 'Sony', 1399.00, '[\"Schwarz\", \"Platin Silber\", \"Khaki Grün\"]', 'Für Foto- und Video-Enthusiasten: Einzigartiges 4K-Display und professionelle Kamerafunktionen.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8 Gen 2\", \"storage\": [\"256GB\", \"512GB\"]}');

-- Nothing Phone (2)
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Nothing Phone (2)', 'Nothing', 599.00, '[\"Schwarz\", \"Weiß\"]', 'Auffälliges Design mit transparenter Rückseite und einzigartigem Glyph-Interface.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8+ Gen 1\", \"storage\": [\"128GB\", \"256GB\"]}');
-- Motorola Edge 40 Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Motorola Edge 40 Pro', 'Motorola', 899.00, '[\"Interstellar Black\", \"Lunar Blue\"]', 'Leistungsstarkes Smartphone mit 200 MP Kamera und ultraschnellem Laden.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Dimensity 9200+\", \"storage\": [\"256GB\", \"512GB\"]}');

-- Asus ROG Phone 7
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Asus ROG Phone 7', 'Asus', 1099.00, '[\"Phantom Black\", \"Storm White\"]', 'Das ultimative Gaming-Smartphone mit leistungsstarkem Prozessor und speziellen Gaming-Features.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Snapdragon 8 Gen 2\", \"storage\": [\"256GB\", \"512GB\"]}');

-- Fairphone 5
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Fairphone 5', 'Fairphone', 699.00, '[\"Sky Green\", \"Matte Black\", \"Transparent\"]', 'Nachhaltiges und modulares Smartphone mit Fokus auf faire Produktion und lange Lebensdauer.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"Android\", \"cpu\": \"Qualcomm QCM6490\", \"storage\": [\"128GB\", \"256GB\"]}');

-- Apple Watch Series 9
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Apple Watch Series 9', 'Apple', 449.00, '[\"Polarstern\", \"Mitternacht\", \"Silber\", \"(PRODUCT)RED\"]', 'Die fortschrittlichste Apple Watch mit neuen Gesundheitsfunktionen und schnellerem Prozessor.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"watchOS\", \"displaySize\": [\"41mm\", \"45mm\"], \"connectivity\": \"GPS + Cellular\"}');

-- Samsung Galaxy Watch 6 Classic
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Samsung Galaxy Watch 6 Classic', 'Samsung', 399.00, '[\"Schwarz\", \"Silber\"]', 'Elegante Smartwatch mit drehbarer Lünette und umfassenden Fitness-Tracking.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"Wear OS\", \"displaySize\": [\"43mm\", \"47mm\"], \"connectivity\": \"Bluetooth/Wi-Fi\"}');

-- Garmin fenix 7
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Garmin fenix 7', 'Garmin', 699.00, '[\"Schwarz\", \"Weiß\", \"Grau\", \"Solar\"]', 'Outdoor-Smartwatch mit GPS, Karten und umfangreichen Sportfunktionen.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"Garmin OS\", \"displaySize\": [\"42mm\", \"47mm\", \"51mm\"], \"connectivity\": \"Multi-GNSS, Bluetooth, Wi-Fi\"}');

-- Fitbit Sense 2
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Fitbit Sense 2', 'Fitbit', 299.00, '[\"Grau\", \"Weiß\", \"Blau\"]', 'Gesundheits- und Fitness-Smartwatch mit Stressmanagement und EDA-Scan.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"Fitbit OS\", \"displaySize\": [\"40.48mm\"], \"connectivity\": \"Bluetooth, Wi-Fi\"}');
-- Huawei Watch GT 3 Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Huawei Watch GT 3 Pro', 'Huawei', 329.00, '[\"Schwarz\", \"Weiß\", \"Braun\"]', 'Premium-Smartwatch mit EKG-Funktion und langer Akkulaufzeit.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"HarmonyOS\", \"displaySize\": [\"46.6mm\"], \"connectivity\": \"Bluetooth, Wi-Fi\"}');

-- Fossil Gen 6
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Fossil Gen 6', 'Fossil', 299.00, '[\"Schwarz\", \"Silber\", \"Roségold\", \"Braun\"]', 'Modische Smartwatch mit Wear OS und vielen Designs.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"Wear OS\", \"displaySize\": [\"42mm\", \"44mm\"], \"connectivity\": \"Bluetooth, Wi-Fi\"}');

-- Polar Pacer Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Polar Pacer Pro', 'Polar', 299.00, '[\"Schwarz\", \"Weiß\", \"Blau\"]', 'Sportuhr mit GPS und detaillierten Trainingsanalysen.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"Polar OS\", \"displaySize\": [\"45mm\"], \"connectivity\": \"GPS, Bluetooth\"}');

-- TicWatch Pro 5
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('TicWatch Pro 5', 'Mobvoi', 359.00, '[\"Obsidian\", \"Schwarz\"]', 'Innovative Smartwatch mit dualem Display für längere Akkulaufzeit.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{"type": "Smartwatch", "os": "Wear OS", "displaySize": ["45mm", "44mm"], "connectivity": "GPS, Bluetooth, Wi-Fi"}');

-- Suunto 9 Peak Pro
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Suunto 9 Peak Pro', 'Suunto', 499.00, '[\"Schwarz\", \"Weiß\", "Titan\"]', 'Robuste Outdoor-Smartwatch mit langer Akkulaufzeit und präzisem GPS.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{"type": "Smartwatch", "os": "Suunto OS", "displaySize": ["43mm", "47mm"], "connectivity": "GPS, Bluetooth, Wi-Fi"}');

-- iPhone 14
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('iPhone 14', 'Apple', 899.00, '[\"Polarstern\", \"Mitternacht\", \"Blau\", \"Violett\", \"(PRODUCT)RED\"]', 'Leistungsstarkes Smartphone mit A15 Bionic Chip und verbesserter Kamera.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{\"type\": \"Smartphone\", \"os\": \"iOS 16\", \"cpu\": \"A15 Bionic Chip\", \"storage\": [\"128GB\", \"256GB\", \"512GB\"]}');

-- Apple Watch SE (2. Generation)
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Apple Watch SE (2. Generation)', 'Apple', 299.00, '[\"Polarstern\", \"Mitternacht\", "Silber\"]', 'Günstige Apple Watch mit vielen Funktionen für Fitness und Gesundheit.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{\"type\": \"Smartwatch\", \"os\": \"watchOS\", \"displaySize\": [\"40mm\", \"44mm\"], \"connectivity\": \"GPS\"}');
-- Samsung Galaxy Z Fold5
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Samsung Galaxy Z Fold5', 'Samsung', 1799.00, '["Ice Blue", "Phantom Black", "Cream"]', 'Innovatives faltbares Smartphone mit großem Display und leistungsstarker Hardware.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "Snapdragon 8 Gen 2", "storage": ["256GB", "512GB", "1TB"]}');

-- Samsung Galaxy Watch 6
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Samsung Galaxy Watch 6', 'Samsung', 299.00, '["Grau", "Gold", "Silber"]', 'Smartwatch mit schlankem Design und umfangreichen Gesundheitsfunktionen.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{"type": "Smartwatch", "os": "Wear OS", "displaySize": ["40mm", "44mm"], "connectivity": "Bluetooth/Wi-Fi"}');

-- Sony Xperia 5 V
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Sony Xperia 5 V', 'Sony', 999.00, '["Schwarz", "Platinsilber", "Blau"]', 'Kompaktes Flaggschiff mit professionellen Kamerafunktionen und 4K HDR OLED-Display.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "Snapdragon 8 Gen 2", "storage": ["128GB", "256GB"]}');

-- Sony Xperia 10 V
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Sony Xperia 10 V', 'Sony', 449.00, '["Schwarz", "Weiß", "Lavendel", "Salbei Grün"]', 'Mittelklasse-Smartphone mit 21:9 OLED-Display und 5000 mAh Akku.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "Snapdragon 695", "storage": ["128GB"]}');

-- Sony SmartWatch 4
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Sony SmartWatch 4', 'Sony', 279.00, '["Schwarz", "Silber"]', 'Sportliche Smartwatch mit Wear OS und vielen Fitnessfunktionen.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{"type": "Smartwatch", "os": "Wear OS", "displaySize": [\"1.32\"], "connectivity": "GPS, Bluetooth, Wi-Fi"}');

-- Google Pixel Watch
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Google Pixel Watch', 'Google', 379.00, '["Schwarz", "Silber", "Gold"]', 'Die erste Smartwatch von Google mit Wear OS und Fitbit-Integration.', 'https://www.infranken.de/storage/image/9/3/8/4/4114839_bei-amazon-findest-du-tolle-smart-watch-angebote-rund-um-den-black-friday_artikel-detail-bild_1BlSy3_y5jiEH.jpg', '{"type": "Smartwatch", "os": "Wear OS", "displaySize": [\"1.2\"], "connectivity": "Bluetooth/Wi-Fi"}');
-- Google Pixel 7a
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Google Pixel 7a', 'Google', 509.00, '["Charcoal", "Snow", "Sea", "Coral"]', 'Erschwingliches Pixel-Smartphone mit Google Tensor G2 Chip und beeindruckender Kamera.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "Google Tensor G2", "storage": ["128GB"]}');

-- Asus Zenfone 9
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Asus Zenfone 9', 'Asus', 799.00, '["Schwarz", "Weiß", "Rot", "Blau"]', 'Kompaktes Kraftpaket mit Snapdragon 8+ Gen 1 Prozessor und Gimbal-Stabilisierung.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "Snapdragon 8+ Gen 1", "storage": ["128GB", "256GB"]}');

-- Asus ROG Phone 6D
INSERT INTO `products` (`name`, `manufacturer`, `price`, `color`, `description`, `image`, `technicalDetails`) VALUES
('Asus ROG Phone 6D', 'Asus', 949.00, '["Space Gray", "Phantom Black"]', 'Gaming-Smartphone mit MediaTek Dimensity 9000+ Chip und speziellen Gaming-Features.', 'https://www.zdnet.com/a/img/resize/e889f5ab7352d3b8a21ccf591d37c32342c36c4b/2024/02/02/fe353b53-8b16-494b-96e0-2d83788da0f2/dsc01662-enhanced-nr.jpg?auto=webp&fit=crop&height=360&width=640', '{"type": "Smartphone", "os": "Android", "cpu": "MediaTek Dimensity 9000+", "storage": ["256GB", "512GB"]}');

-- @block
INSERT INTO `cart` (`customerId`) VALUES (3), (8), (5), (1), (10);
-- @block
INSERT INTO `orders` (`cartId`, `customerId`, `orderDate`, `status`, `total`, `paymentMethod`) VALUES
(1, 3, '2024-07-03 09:20:00', 'processing', 2498.00, 'credit_card'),
(2, 8, '2024-07-02 15:30:00', 'shipped', 1099.00, 'paypal'),
(3, 5, '2024-07-01 11:45:00', 'delivered', 1998.00, 'credit_card'),
(4, 1, '2024-06-30 18:15:00', 'processing', 1748.00, 'credit_card'),
(5, 10, '2024-06-29 10:00:00', 'cancelled', 599.00, 'credit_card');

-- @block
-- Kommentare für iPhone 14 Pro (productId 1)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(1, FLOOR(1 + RAND() * 20), 'Die Kamera ist einfach unglaublich! Die Bildqualität ist atemberaubend.', 5),
(1, FLOOR(1 + RAND() * 20), 'Der neue A16 Chip ist sehr schnell und die Akkulaufzeit ist beeindruckend.', 5),
(1, FLOOR(1 + RAND() * 20), 'Ich liebe das Design und die neuen Funktionen. Ein tolles Upgrade!', 5),
(1, FLOOR(1 + RAND() * 20), 'Der Preis ist sehr hoch und einige Funktionen sind noch nicht ausgereift.', 3);

-- Kommentare für Samsung Galaxy S23 Ultra (productId 2)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(2, FLOOR(1 + RAND() * 20), 'Die Kamera ist der Wahnsinn! Der Zoom ist unglaublich.', 5),
(2, FLOOR(1 + RAND() * 20), 'Ein tolles Smartphone, aber der Preis ist etwas hoch.', 4),
(2, FLOOR(1 + RAND() * 20), 'Die Software ist manchmal etwas langsam und die Akkulaufzeit könnte besser sein.', 2);

-- Kommentare für Google Pixel 7 Pro (productId 3)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(3, FLOOR(1 + RAND() * 20), 'Das beste Android-Handy auf dem Markt! Die Kamera ist fantastisch.', 4),
(3, FLOOR(1 + RAND() * 20), 'Ich bin sehr zufrieden mit dem Pixel 7 Pro. Es ist schnell und zuverlässig.', 5),
(3, FLOOR(1 + RAND() * 20), 'Das Display ist nicht so hell wie erwartet und der Fingerabdrucksensor ist manchmal träge.', 1);

-- Kommentare für Xiaomi 13 Pro (productId 4)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(4, FLOOR(1 + RAND() * 20), 'Unglaublich viel für das Geld! Die Kamera ist top.', 5),
(4, FLOOR(1 + RAND() * 20), 'Die Benutzeroberfläche ist gewöhnungsbedürftig und die Update-Politik von Xiaomi ist nicht ideal.', 3);

-- Kommentare für OnePlus 11 (productId 5)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(5, FLOOR(1 + RAND() * 20), 'Das schnellste Handy, das ich je hatte! Das Display ist fantastisch.', 5),
(5, FLOOR(1 + RAND() * 20), 'Die Kameraqualität ist nicht so gut wie bei anderen Flaggschiffen und die Software hat noch ein paar Bugs.', 2);

-- Kommentare für Sony Xperia 1 V (productId 6)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(6, FLOOR(1 + RAND() * 20), 'Perfekt für meine Filmprojekte!', 5),
(6, FLOOR(1 + RAND() * 20), 'Der Preis ist hoch, aber die Leistung und die Kamera sind unschlagbar. Das Xperia 1 V ist ein Kraftpaket für Kreative und alle, die das Beste wollen.', 4),
(6, FLOOR(1 + RAND() * 20), 'Als Gamer bin ich enttäuscht. Der Akku hält bei anspruchsvollen Spielen nicht lange durch. Für den Preis hätte ich mehr erwartet.', 3),
(6, FLOOR(1 + RAND() * 20), 'Das Xperia 1 V ist ein Traum für jeden Sony-Liebhaber. Design, Verarbeitung und Software sind top. Die Kamera ist einfach fantastisch!', 5),
(6, FLOOR(1 + RAND() * 20), 'Ein Nischenprodukt für Foto- und Video-Enthusiasten. Wer nicht viel Wert darauf legt, findet günstigere Alternativen.', 4);

-- Kommentare für Nothing Phone (2) (productId 7)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(7, FLOOR(1 + RAND() * 20), 'Ein echter Hingucker! Das Design ist einfach einzigartig.', 5),
(7, FLOOR(1 + RAND() * 20), 'Die Performance ist gut, aber die Kamera könnte besser sein.', 3),
(7, FLOOR(1 + RAND() * 20), 'Ich liebe das Glyph-Interface! Es ist wirklich innovativ.', 4);

-- Kommentare für Motorola Edge 40 Pro (productId 8)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(8, FLOOR(1 + RAND() * 20), 'Die 200 MP Kamera ist unglaublich detailreich! Das Laden geht super schnell.', 5),
(8, FLOOR(1 + RAND() * 20), 'Die Software ist manchmal etwas buggy, aber insgesamt ein gutes Smartphone.', 3);

-- Kommentare für Asus ROG Phone 7 (productId 9)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(9, FLOOR(1 + RAND() * 20), 'Das beste Handy für Mobile Gaming! Die Performance ist der Wahnsinn.', 5),
(9, FLOOR(1 + RAND() * 20), 'Für den Preis hätte ich eine bessere Kamera erwartet.', 3),
(9, FLOOR(1 + RAND() * 20), 'Die Lüfter sind etwas laut, aber das Handy bleibt beim Spielen kühl.', 4);

-- Kommentare für Fairphone 5 (productId 10)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(10, FLOOR(1 + RAND() * 20), 'Endlich ein Smartphone mit gutem Gewissen! Die Modularität ist super.', 4),
(10, FLOOR(1 + RAND() * 20), 'Die Leistung ist nicht die beste, aber das ist für mich zweitrangig.', 3);

-- Kommentare für Apple Watch Series 9 (productId 11)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(11, FLOOR(1 + RAND() * 20), 'Die EKG-Funktion ist super! Das Design ist elegant.', 4),
(11, FLOOR(1 + RAND() * 20), 'Die Fitness-Tracking-Funktionen sind sehr genau und motivierend.', 5),
(11, FLOOR(1 + RAND() * 20), 'Die Akkulaufzeit könnte etwas besser sein, aber insgesamt eine tolle Smartwatch.', 3);

-- Kommentare für Samsung Galaxy Watch 6 Classic (productId 12)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(12, FLOOR(1 + RAND() * 20), 'Der Akku hält ewig und das Design ist klasse!', 5),
(12, FLOOR(1 + RAND() * 20), 'Die Lünette ist sehr praktisch und die Gesundheitsfunktionen sind nützlich.', 4),
(12, FLOOR(1 + RAND() * 20), 'Die Leistung könnte etwas besser sein, aber für den Preis ist es in Ordnung.', 3);
 
-- Kommentare für Garmin fenix 7 (productId 13)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(13, FLOOR(1 + RAND() * 20), 'Perfekt für meine Abenteuer! Die Navigation ist top und die Akkulaufzeit ist super.', 5),
(13, FLOOR(1 + RAND() * 20), 'Die Karten sind sehr detailliert und die Sportmodi sind umfangreich.', 4),
(13, FLOOR(1 + RAND() * 20), 'Die Uhr ist etwas klobig und die Bedienung gewöhnungsbedürftig.', 3);

-- Kommentare für Fitbit Sense 2 (productId 14)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(14, FLOOR(1 + RAND() * 20), 'Hilft mir, Stress abzubauen und meine Gesundheit besser zu verstehen.', 4),
(14, FLOOR(1 + RAND() * 20), 'Die Schlafüberwachung ist sehr genau und die Stressmanagement-Tools sind nützlich.', 5),
(14, FLOOR(1 + RAND() * 20), 'Die Akkulaufzeit könnte etwas länger sein, aber insgesamt eine gute Smartwatch.', 3);

-- Kommentare für Amazfit GTR 4 (productId 15)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(15, FLOOR(1 + RAND() * 20), 'Top Preis-Leistungs-Verhältnis! Die Akkulaufzeit ist beeindruckend.', 4),
(15, FLOOR(1 + RAND() * 20), 'Viele Funktionen für den Preis, aber die Genauigkeit des GPS könnte besser sein.', 3),
(15, FLOOR(1 + RAND() * 20), 'Sieht gut aus und ist angenehm zu tragen. Für den Alltag perfekt.', 4);

-- Kommentare für Huawei Watch GT 3 Pro (productId 16)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(16, FLOOR(1 + RAND() * 20), 'Sieht edel aus und funktioniert super! Die EKG-Funktion ist ein Plus.', 5),
(16, FLOOR(1 + RAND() * 20), 'Die Gesundheitsfunktionen sind sehr umfangreich und genau.', 4),
(16, FLOOR(1 + RAND() * 20), 'Die App-Auswahl ist begrenzt, aber für meine Bedürfnisse reicht es.', 3);

-- Kommentare für Fossil Gen 6 (productId 17)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(17, FLOOR(1 + RAND() * 20), 'Passt perfekt zu meinem Outfit! Die große Auswahl an Designs ist toll.', 4),
(17, FLOOR(1 + RAND() * 20), 'Die Integration mit Google Assistant ist sehr praktisch.', 4),
(17, FLOOR(1 + RAND() * 20), 'Die Akkulaufzeit ist nicht die beste und die Performance könnte etwas schneller sein.', 2);

-- Kommentare für Polar Pacer Pro (productId 18)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(18, FLOOR(1 + RAND() * 20), 'Mein neuer Laufpartner! Die Trainingsanalysen sind sehr hilfreich.', 5),
(18, FLOOR(1 + RAND() * 20), 'Die GPS-Genauigkeit ist beeindruckend und die Uhr ist sehr leicht.', 4),
(18, FLOOR(1 + RAND() * 20), 'Ich wünschte, es gäbe mehr Smartwatch-Funktionen.', 3);

-- Kommentare für TicWatch Pro 5 (productId 19)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(19, FLOOR(1 + RAND() * 20), 'Das duale Display ist genial! Die Akkulaufzeit ist unglaublich.', 4),
(19, FLOOR(1 + RAND() * 20), 'Die Performance ist gut und die App-Auswahl ist großartig.', 5),
(19, FLOOR(1 + RAND() * 20), 'Das Design ist etwas gewöhnungsbedürftig, aber die Funktionen sind top.', 4);

-- Kommentare für Suunto 9 Peak Pro (productId 20)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(20, FLOOR(1 + RAND() * 20), 'Hält alles aus und zeigt mir den Weg! Die Akkulaufzeit ist der Wahnsinn.', 5),
(20, FLOOR(1 + RAND() * 20), 'Die Navigationsfunktionen sind sehr gut und die Uhr ist super robust.', 4),
(20, FLOOR(1 + RAND() * 20), 'Die Smartwatch-Funktionen sind etwas begrenzt, aber für Outdoor-Aktivitäten perfekt.', 3);

-- Kommentare für iPhone 14 (productId 21)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(21, FLOOR(1 + RAND() * 20), 'Ein solides Upgrade vom iPhone 13. Die Kamera ist spürbar besser und die Akkulaufzeit ist top.', 5),
(21, FLOOR(1 + RAND() * 20), 'Zu wenig Innovation für den hohen Preis. Das Design ist fast identisch zum Vorgänger.', 2);

-- Kommentare für Apple Watch SE (2. Generation) (productId 22)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(22, FLOOR(1 + RAND() * 20), 'Viel Apple Watch für wenig Geld. Perfekt für Einsteiger und alle, die nicht das neueste Modell brauchen.', 4),
(22, FLOOR(1 + RAND() * 20), 'Motiviert mich, mich mehr zu bewegen und auf meine Gesundheit zu achten. Die Schlafanalyse ist super!', 5),
(22, FLOOR(1 + RAND() * 20), 'Für den Preis fehlen mir einige Funktionen der Series 9. Die EKG- und Blutsauerstoffmessung wären toll gewesen.', 3);

-- Kommentare für Samsung Galaxy Z Fold5 (productId 23)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(23, FLOOR(1 + RAND() * 20), 'Die Zukunft der Smartphones! Das große Display ist perfekt für Multitasking und Medien.', 5),
(23, FLOOR(1 + RAND() * 20), 'Der Preis ist sehr hoch und die Haltbarkeit des Faltmechanismus ist fraglich.', 2);

-- Kommentare für Samsung Galaxy Watch 6 (productId 24)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(24, FLOOR(1 + RAND() * 20), 'Ein würdiger Nachfolger der Galaxy Watch 5. Die Akkulaufzeit ist super und die neuen Gesundheitsfunktionen sind toll.', 4),
(24, FLOOR(1 + RAND() * 20), 'Die Integration mit Google Assistant ist sehr praktisch und die App-Auswahl ist groß.', 5);

-- Kommentare für Sony Xperia 5 V (productId 25)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(25, FLOOR(1 + RAND() * 20), 'Endlich ein handliches High-End-Smartphone! Die Kamera ist top und das Display gestochen scharf.', 5),
(25, FLOOR(1 + RAND() * 20), 'Der Sound über die Kopfhörerbuchse ist fantastisch! Sony bleibt seinen Stärken treu.', 4);

-- Kommentare für Sony Xperia 10 V (productId 26)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(26, FLOOR(1 + RAND() * 20), 'Gutes Smartphone für den Preis. Das Display ist super für Filme und Serien.', 4),
(26, FLOOR(1 + RAND() * 20), 'Die Kamera ist okay, aber bei wenig Licht nicht so gut. Für den Alltag reicht es aber.', 3),
(26, FLOOR(1 + RAND() * 20), 'Ich liebe das schlanke Design und die lange Akkulaufzeit. Ein solides Mittelklasse-Gerät von Sony.', 4);

-- Kommentare für Sony SmartWatch 4 (productId 27)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(27, FLOOR(1 + RAND() * 20), 'Die Trainingserfassung ist sehr genau und die Akkulaufzeit ist gut.', 4),
(27, FLOOR(1 + RAND() * 20), 'Ich mag die Integration mit Google Assistant und die vielen verfügbaren Apps.', 5);

-- Kommentare für Google Pixel 7a (productId 28)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(28, FLOOR(1 + RAND() * 20), 'Unglaublich viel Smartphone für den Preis! Die Kamera ist fast so gut wie beim Pixel 7 Pro.', 5),
(28, FLOOR(1 + RAND() * 20), 'Das beste Preis-Leistungs-Verhältnis auf dem Markt. Die Software ist top und die Kamera macht tolle Bilder.', 4);

-- Kommentare für Google Pixel Watch (productId 29)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(29, FLOOR(1 + RAND() * 20), 'Endlich eine Google-Smartwatch! Die Integration mit meinem Pixel-Smartphone ist nahtlos.', 4),
(29, FLOOR(1 + RAND() * 20), 'Die Akkulaufzeit könnte besser sein, aber das Design und die Funktionen sind super.', 3),
(29, FLOOR(1 + RAND() * 20), 'Die Fitbit-Integration ist großartig! Ich liebe die Gesundheits- und Fitnessfunktionen.', 5);

-- Kommentare für Asus Zenfone 9 (productId 30)
INSERT INTO `comments` (`productId`, `customerId`, `text`, `rating`) VALUES
(30, FLOOR(1 + RAND() * 20), 'Die Leistung ist unglaublich! Das Zenfone 9 ist klein, aber oho.', 5),
(30, FLOOR(1 + RAND() * 20), 'Die Gimbal-Stabilisierung macht einen riesigen Unterschied bei Videos. Die Bildqualität ist top.', 4);

-- @block
SELECT * FROM orders 

-- @block
SELECT products.productId, products.name, AVG(comments.rating) AS average_rating
FROM products
JOIN comments ON products.productId = comments.productId
GROUP BY products.productId
HAVING average_rating >= 4;
-- @block
SELECT * FROM products

-- @block
ALTER TABLE customer ADD COLUMN password VARCHAR(255);

--@block
UPDATE customer
SET password = 'Password123'
WHERE customerId = 3;

-- @block
USE local; // change to your database name
--@block
SHOW DATABASES;

--@block 
CREATE DATABASE IF NOT EXISTS name;

-- @block
SELECT * FROM products;
SELECT * FROM comments;
SELECT * FROM orders;
SELECT * FROM customer;
