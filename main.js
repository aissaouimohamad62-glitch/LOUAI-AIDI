// 1. تدوير النصوص التفاعلية
const texts = [
    "لطلب الكتابة والمونتاج الإحترافي تواصل معنا 🎥",
    "دعمكم سر نجاحنا 🥇 🐆",
    "نحول أفكارك إلى واقع سينمائي 🎬",
    "VxV: التميز في عالم الريلز ✨"
];

let index = 0;
function rotateText() {
    const textElement = document.getElementById('changing-text');
    if (!textElement) return;
    
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerText = texts[index];
        textElement.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500);
}
setInterval(rotateText, 3500);
rotateText();

// 2. الفهود والميداليات المتحركة 🐆🥇
const emojiIcons = ['🐆', '🥇', '🔥', '🎬', '✨'];
function createEmoji() {
    const container = document.getElementById('emoji-world');
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.innerText = emojiIcons[Math.floor(Math.random() * emojiIcons.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 3 + 6) + 's';
    container.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), 9000);
}
setInterval(createEmoji, 700);

// 3. نظام الإعجابات
function handleLike(btn) {
    btn.classList.toggle('active');
    const countSpan = btn.querySelector('.like-count');
    let currentCount = parseFloat(countSpan.innerText);
    
    if (btn.classList.contains('active')) {
        countSpan.innerText = (currentCount + 0.1).toFixed(1) + "K";
    } else {
        countSpan.innerText = (currentCount - 0.1).toFixed(1) + "K";
    }
}

// 4. نظام المشاركة
function shareLink(url) {
    navigator.clipboard.writeText(url);
    alert("تم نسخ رابط الفيديو! شاركه الآن مع أصدقائك 🚀");
}

// 5. رسالة التسجيل
function loginAlert() {
    alert("لضمان المصداقية، ميزة التعليق ستكون متاحة قريباً بعد ربط حسابك بـ Gmail.");
}