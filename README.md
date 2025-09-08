# Sanovia - Landing Page Coming Soon

🏥 **Sanovia** est une startup innovante dédiée à la révolution de la gestion des rendez-vous médicaux et des dossiers patients.

## 🚀 À propos du projet

Cette landing page "Coming Soon" présente Sanovia, une solution complète pour les professionnels de santé qui souhaitent :

- **Simplifier la gestion des rendez-vous** - Planification, modification et suivi centralisés
- **Optimiser les dossiers patients** - Accès rapide et sécurisé aux informations médicales
- **Bénéficier d'une application mobile** - Restez connecté où que vous soyez
- **Garantir la sécurité des données** - Protection avancée des informations médicales

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique et accessible
- **CSS3** - Design moderne avec variables CSS et animations
- **JavaScript (ES6+)** - Interactions dynamiques et fonctionnalités avancées
- **Font Awesome** - Icônes professionnelles
- **Google Fonts (Inter)** - Typographie moderne et lisible

## ✨ Fonctionnalités

### 🎯 Fonctionnalités principales
- **Compte à rebours dynamique** jusqu'au lancement
- **Formulaire d'inscription** pour les early adopters
- **Animation des statistiques** au scroll
- **Design responsive** pour tous les appareils
- **Modal de confirmation** pour les inscriptions

### 🎨 Design et UX
- **Interface moderne** avec gradient et ombres subtiles
- **Animations fluides** et interactions engageantes
- **Accessibilité** optimisée (ARIA labels, navigation clavier)
- **Performance** optimisée avec lazy loading des animations

### 📱 Responsive Design
- **Mobile First** - Optimisé pour les smartphones
- **Tablette** - Adaptation pour les écrans moyens
- **Desktop** - Expérience complète sur grand écran

## 🚀 Installation et utilisation

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Serveur web local (optionnel, pour éviter les restrictions CORS)

### Lancement rapide
1. Clonez ou téléchargez les fichiers
2. Ouvrez `index.html` dans votre navigateur
3. Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   
   # Avec PHP
   php -S localhost:8000
   ```

## 📁 Structure du projet

```
coming-soon-sanovia/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Logique JavaScript
├── README.md           # Documentation
└── .github/
    └── copilot-instructions.md
```

## ⚙️ Configuration

### Date de lancement
Modifiez la date de lancement dans `script.js` :
```javascript
const LAUNCH_DATE = new Date('2024-12-01T00:00:00').getTime();
```

### Couleurs et thème
Personnalisez les variables CSS dans `styles.css` :
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
    /* ... autres variables */
}
```

### Statistiques
Modifiez les chiffres dans `index.html` :
```html
<div class="stat-number" data-count="500">0</div>
```

## 🔧 Personnalisation

### Contenu
- Modifiez les textes dans `index.html`
- Ajustez les descriptions des fonctionnalités
- Personnalisez les informations de contact

### Styles
- Adaptez les couleurs dans les variables CSS
- Modifiez les animations dans `styles.css`
- Ajustez les breakpoints responsive

### Fonctionnalités
- Intégrez un vrai service d'email (MailChimp, SendGrid)
- Ajoutez Google Analytics ou autres outils de tracking
- Connectez à une base de données pour stocker les inscriptions

## 📊 Fonctionnalités techniques

### Gestion des emails
- Validation côté client
- Stockage local pour la démo
- Interface prête pour intégration API

### Animations
- Intersection Observer pour les animations au scroll
- Compteurs animés pour les statistiques
- Transitions CSS optimisées

### Accessibilité
- Navigation clavier complète
- ARIA labels appropriés
- Contraste de couleurs respecté

## 🌐 Déploiement

### GitHub Pages
1. Poussez le code sur GitHub
2. Activez GitHub Pages dans les paramètres
3. Votre site sera accessible à `username.github.io/repo-name`

### Netlify
1. Connectez votre repository GitHub
2. Déployment automatique à chaque push
3. SSL et CDN inclus

### Vercel
1. Importez depuis GitHub
2. Déployment en un clic
3. Domaine personnalisé disponible

## 🤝 Contribution

Nous accueillons les contributions ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📞 Contact

**Sanovia Team**
- 📧 Email : contact@sanovia.com (placeholder)
- 🌐 Website : www.sanovia.com (placeholder)
- 💼 LinkedIn : [Sanovia](https://linkedin.com/company/sanovia) (placeholder)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🔄 Changelog

### v1.0.0 (2024-12-08)
- 🎉 Version initiale de la landing page
- ✨ Compte à rebours dynamique
- 📧 Système d'inscription par email
- 📱 Design responsive complet
- 🎨 Animations et transitions fluides

---

**Développé avec ❤️ pour révolutionner la gestion médicale**
