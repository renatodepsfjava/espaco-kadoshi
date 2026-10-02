# 🌸 Site Espaço Kadoshi

Site institucional moderno e responsivo para o **Espaço de Beleza Kadoshi**, localizado em Juiz de Fora/MG.

---

## 📋 Sobre o Projeto

Site profissional desenvolvido para apresentar os serviços de beleza e estética do Espaço Kadoshi, com design elegante e funcionalidades modernas.

### 🎯 Serviços Oferecidos:
- 💅 **Manicure & Pedicure** - Tairine
- ✨ **Estética** - Jacqueline

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (Gradientes, Animações, Grid, Flexbox)
- JavaScript (ES6+)
- Google Fonts
- Font Awesome

---

## ✨ Características do Site

### Design Moderno:
- ✅ Gradientes sofisticados (rosa, lavanda, dourado)
- ✅ Animações suaves e profissionais
- ✅ Efeitos hover 3D
- ✅ Scroll suave entre seções
- ✅ Partículas decorativas animadas

### Responsividade:
- ✅ 100% responsivo (mobile, tablet, desktop)
- ✅ Menu hamburger em mobile
- ✅ Grid adaptativo
- ✅ Imagens otimizadas

### Funcionalidades:
- ✅ Formulário de cadastro integrado com WhatsApp
- ✅ Seção de depoimentos/avaliações do Google
- ✅ Links para redes sociais
- ✅ Tela de entrada animada
- ✅ Fade-in nas seções ao scroll

---

## 📁 Estrutura do Projeto

```
espaco-kadoshi/
├── index.html                      # Página principal
├── README.md                       # Este arquivo
├── INSTRUCOES-AVALIACOES.md       # Guia para atualizar avaliações
├── QUICK-START-AVALIACOES.txt     # Guia rápido (5 min)
├── template-avaliacoes.html        # Template HTML pronto
│
├── assets/
│   ├── css/
│   │   └── style.css              # Estilos principais
│   ├── js/
│   │   └── script.js              # Scripts e interações
│   └── img/
│       ├── logo3.png              # Logo principal
│       ├── flor-logo.png          # Ícone da marca
│       ├── manicure.png           # Ícone manicure
│       └── estetica.png           # Ícone estética
│
└── api/                           # API (se houver backend)
```

---

## 🎨 Paleta de Cores

```css
--rosa-bg: #fff7fa         /* Background rosa claro */
--rosa-card: #fde9ef       /* Cards rosa */
--rosa-borda: #f5d9e8      /* Bordas rosa */
--lavanda: #f4effc         /* Lavanda */
--lavanda-suave: #ede2f6   /* Lavanda claro */
--texto: #732f4a           /* Rosa escuro (títulos) */
--texto-suave: #543242     /* Cinza escuro (textos) */
--btn: #e781a7             /* Botões rosa */
--btn-hover: #bc3c76       /* Hover rosa escuro */
--dourado: #d4af37         /* Dourado (destaques) */
--dourado-claro: #f4e4b7   /* Dourado claro */
```

---

## 📱 Seções do Site

### 1. **Header**
- Logo com ícone de flor
- Menu de navegação
- Botão "Cadastre-se"
- Sticky ao scroll

### 2. **Hero**
- Logo principal animado
- Texto de apresentação
- CTA "Quero me cuidar"
- Partículas decorativas

### 3. **Serviços**
- Cards dos serviços (Manicure, Estética)
- Nome das profissionais
- Botões de agendamento
- Ícones ilustrativos

### 4. **Sobre**
- Apresentação do espaço
- Missão e valores

### 5. **Depoimentos** ⭐
- Badge do Google (5.0 ★★★★★)
- Cards de avaliações reais
- Link para Google My Business
- **⚠️ NECESSITA ATUALIZAÇÃO** (ver guia abaixo)

### 6. **Contato**
- Endereço e horário
- Botão WhatsApp animado
- Informações de localização

### 7. **Footer**
- Copyright
- Redes sociais

---

## 🔄 Como Atualizar as Avaliações do Google

### ⚡ Guia Rápido (5 minutos):
Leia o arquivo: **`QUICK-START-AVALIACOES.txt`**

### 📖 Guia Completo:
Leia o arquivo: **`INSTRUCOES-AVALIACOES.md`**

### 🎯 Resumo:
1. Acesse as avaliações no Google My Business
2. Copie 3-6 das melhores avaliações
3. Edite a seção `<section id="depoimentos">` no `index.html`
4. Substitua os cards de exemplo
5. Atualize o rating (5.0 e número de avaliações)
6. Salve e teste no navegador

---

## 🛠️ Como Executar Localmente

### Opção 1: Abrir Diretamente
```bash
# Navegue até a pasta
cd E:\Workspace\espaco-kadoshi

# Abra o index.html no navegador
# (duplo clique ou botão direito → "Abrir com" → Chrome/Firefox)
```

### Opção 2: Servidor Local (Recomendado)
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000

# Acesse: http://localhost:8000
```

---

## 📝 Tarefas Pendentes

### ⚠️ Prioritário:
- [ ] **Atualizar avaliações reais do Google** (seção depoimentos)
- [ ] Verificar e atualizar link do Instagram no footer
- [ ] Testar formulário de cadastro/WhatsApp

### 🔄 Opcional:
- [ ] Adicionar mais fotos dos serviços
- [ ] Criar página de agendamento online
- [ ] Integrar Google Maps na seção de contato
- [ ] Implementar Google Analytics
- [ ] Otimizar imagens (WebP, lazy loading)
- [ ] Adicionar meta tags para SEO
- [ ] Criar sitemap.xml

---

## 🌐 Como Publicar

### GitHub Pages:
```bash
git add .
git commit -m "Atualiza site"
git push origin main

# Configure GitHub Pages:
# Settings → Pages → Source: main → / (root) → Save
# URL: https://seu-usuario.github.io/espaco-kadoshi
```

### Netlify:
```bash
# Arraste a pasta para: https://app.netlify.com/drop
# Ou conecte o repositório GitHub
```

### Vercel:
```bash
vercel deploy
```

### Hospedagem Tradicional:
1. Faça upload de todos os arquivos via FTP
2. Aponte o domínio para a hospedagem
3. Certifique-se de que `index.html` está na raiz

---

## 📞 Informações de Contato

**Espaço Kadoshi**
- 📍 Endereço: Av. Santa Luzia, 405, Juiz de Fora/MG
- 🕐 Horário: Terça a Sábado, 8h às 18h
- 📱 WhatsApp: (32) 99139-7354
- ⭐ Google: 5.0 (21 avaliações)

---

## 📄 Licença

Projeto desenvolvido para uso exclusivo do **Espaço de Beleza Kadoshi**.

---

## 🤝 Contribuições

Para sugestões ou melhorias:
1. Abra uma issue
2. Faça um fork do projeto
3. Crie uma branch para sua feature
4. Envie um pull request

---

## 📚 Documentação Adicional

- **Design**: Cores e gradientes modernos com foco em elegância
- **Animações**: CSS3 transitions e keyframes
- **Responsividade**: Mobile-first com breakpoints em 700px e 800px
- **Acessibilidade**: Labels, alt texts e contraste adequado

---

## 🎉 Créditos

- **Design e Desenvolvimento**: [Seu Nome/Empresa]
- **Cliente**: Espaço de Beleza Kadoshi
- **Fontes**: Google Fonts (Inter, Great Vibes)
- **Ícones**: Customizados

---

## 📌 Versão

**v2.0** - Outubro 2026
- ✅ Design modernizado
- ✅ Seção de depoimentos integrada
- ✅ Animações aprimoradas
- ✅ Responsividade otimizada
- ✅ Documentação completa

---

**⭐ Se você gostou do projeto, deixe uma estrela no repositório!**

**💬 Dúvidas? Consulte os arquivos de documentação ou entre em contato.**

---

*Desenvolvido com 💖 para o Espaço Kadoshi*
