# הגדרת EmailJS לשליחת מיילים אמיתיים

## 📧 איך להגדיר EmailJS:

### 1. יצירת חשבון ב-EmailJS
1. היכנס ל-https://www.emailjs.com/
2. צור חשבון חינמי
3. היכנס ל-Dashboard

### 2. יצירת Email Service
1. לך ל-"Email Services"
2. לחץ על "Add New Service"
3. בחר ב-Gmail (או שירות אחר)
4. התחבר לחשבון המייל שלך
5. שמור את ה-Service ID

### 3. יצירת Email Template
1. לך ל-"Email Templates"
2. לחץ על "Create New Template"
3. עיצב את התבנית:

```html
הודעה חדשה מ-{{from_name}}

אימייל: {{from_email}}
נושא: {{subject}}

הודעה:
{{message}}

---
נשלח מהאתר של עומרי בן-גיגי
```

4. שמור את ה-Template ID

### 4. קבלת Public Key
1. לך ל-"Account" > "API Keys"
2. העתק את ה-Public Key

### 5. עדכון הקוד
עדכן את הקובץ `src/components/Contact.tsx` עם הפרטים שלך:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID', // Service ID שקיבלת
  'YOUR_TEMPLATE_ID', // Template ID שיצרת
  templateParams,
  'YOUR_PUBLIC_KEY' // Public Key שלך
)
```

### 6. בדיקה
1. בנה את האתר: `npm run build`
2. שלח את השינויים ל-GitHub
3. בדוק שהטופס עובד

## 🎯 יתרונות EmailJS:
- ✅ חינמי עד 200 מיילים בחודש
- ✅ קל להגדרה
- ✅ אבטחה גבוהה
- ✅ תמיכה בעברית
- ✅ הודעות הצלחה/שגיאה

## 📝 הערות חשובות:
- שמור את המפתחות בסוד
- בדוק שהמיילים מגיעים לתיבת הדואר הנכנס
- הוסף את המיילים לרשימת הלבן אם צריך
