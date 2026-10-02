# 📝 Como Atualizar as Avaliações do Google no Site

## 🎯 Objetivo
Substituir os depoimentos de exemplo pelas avaliações reais do Google do Espaço de Beleza Kadoshi.

---

## 📍 Passo 1: Acessar as Avaliações no Google

1. Abra o navegador
2. Acesse: https://www.google.com/maps/search/Espaço+de+Beleza+Kadoshi+Juiz+de+Fora
3. Clique na aba **"Avaliações"**
4. Você verá todas as 21 avaliações com 5.0 estrelas

---

## 📋 Passo 2: Copiar as Avaliações

Escolha **3 a 6 das melhores avaliações** que:
- Sejam completas e descritivas
- Mencionem os serviços (manicure, estética, ambiente)
- Sejam positivas e autênticas
- Tenham pelo menos 2-3 linhas de texto

Para cada avaliação, anote:
- ⭐ Número de estrelas (geralmente 5)
- 💬 Texto completo da avaliação
- 👤 Nome do cliente (primeiro nome ou iniciais)

---

## 🔧 Passo 3: Editar o Arquivo HTML

1. Abra o arquivo: `E:\Workspace\espaco-kadoshi\index.html`
2. Localize a seção `<section id="depoimentos">`
3. Encontre os comentários HTML que dizem:
   ```html
   <!-- EXEMPLO - Substitua com avaliações reais do Google -->
   ```

4. **Substitua** cada card de exemplo usando este formato:

```html
<div class="depoimento-card">
    <div class="depoimento-estrelas">★★★★★</div>
    <p class="depoimento-texto">"[COLE O TEXTO DA AVALIAÇÃO AQUI]"</p>
    <p class="depoimento-autor">— [Nome do Cliente]</p>
</div>
```

### ⭐ Tabela de Estrelas

| Avaliação | Código HTML |
|-----------|-------------|
| 5 estrelas | `★★★★★` |
| 4 estrelas | `★★★★☆` |
| 3 estrelas | `★★★☆☆` |
| 2 estrelas | `★★☆☆☆` |
| 1 estrela  | `★☆☆☆☆` |

---

## 📊 Passo 4: Atualizar o Rating

Na mesma seção, atualize os números do rating do Google:

```html
<div class="google-rating">
    <span class="rating-numero">5.0</span>
    <div class="rating-estrelas">★★★★★</div>
    <span class="rating-total">(21 avaliações no Google)</span>
</div>
```

Altere conforme necessário:
- `rating-numero`: nota média (ex: 5.0, 4.9, 4.8)
- `rating-total`: número total de avaliações

---

## ✅ Exemplo Completo

**Antes (exemplo fictício):**
```html
<div class="depoimento-card">
    <div class="depoimento-estrelas">★★★★★</div>
    <p class="depoimento-texto">"Atendimento impecável! Profissionais muito atenciosas..."</p>
    <p class="depoimento-autor">— Cliente Google</p>
</div>
```

**Depois (com avaliação real do Google):**
```html
<div class="depoimento-card">
    <div class="depoimento-estrelas">★★★★★</div>
    <p class="depoimento-texto">"Ambiente maravilhoso, profissionais super atenciosas e competentes. A Tairine faz um trabalho incrível nas unhas e a Jacqueline na estética facial. Super recomendo!"</p>
    <p class="depoimento-autor">— Fernanda R.</p>
</div>
```

---

## 🎨 Exemplo de Seção Completa

```html
<section id="depoimentos" class="depoimentos">
    <div class="container">
        <h2>O que dizem sobre nós</h2>
        <div class="google-rating">
            <span class="rating-numero">5.0</span>
            <div class="rating-estrelas">★★★★★</div>
            <span class="rating-total">(21 avaliações no Google)</span>
        </div>
        <div class="depoimentos-lista">
            <!-- Avaliação 1 -->
            <div class="depoimento-card">
                <div class="depoimento-estrelas">★★★★★</div>
                <p class="depoimento-texto">"[Texto da primeira avaliação real]"</p>
                <p class="depoimento-autor">— [Nome Real]</p>
            </div>
            
            <!-- Avaliação 2 -->
            <div class="depoimento-card">
                <div class="depoimento-estrelas">★★★★★</div>
                <p class="depoimento-texto">"[Texto da segunda avaliação real]"</p>
                <p class="depoimento-autor">— [Nome Real]</p>
            </div>
            
            <!-- Avaliação 3 -->
            <div class="depoimento-card">
                <div class="depoimento-estrelas">★★★★★</div>
                <p class="depoimento-texto">"[Texto da terceira avaliação real]"</p>
                <p class="depoimento-autor">— [Nome Real]</p>
            </div>
        </div>
        <a href="https://www.google.com/maps/search/Espaço+de+Beleza+Kadoshi+Juiz+de+Fora" target="_blank" class="ver-todas-avaliacoes">
            Ver todas as avaliações no Google
        </a>
    </div>
</section>
```

---

## 💡 Dicas Importantes

### ✅ Faça:
- Use aspas duplas no texto: `"Adorei o atendimento!"`
- Mantenha o travessão antes do nome: `— Maria`
- Copie o texto exatamente como aparece no Google
- Use 3 a 6 avaliações para não sobrecarregar a página

### ❌ Evite:
- Inventar ou modificar avaliações
- Usar avaliações negativas (escolha as melhores!)
- Remover a pontuação original
- Deixar os exemplos fictícios no site publicado

---

## 🔍 Verificação Final

Antes de publicar, verifique:
- [ ] As avaliações são reais do Google
- [ ] O rating numérico está correto (ex: 5.0)
- [ ] O número total de avaliações está atualizado
- [ ] As estrelas correspondem à nota de cada avaliação
- [ ] Os nomes dos clientes estão corretos
- [ ] O link "Ver todas avaliações" funciona

---

## 🚀 Próximo Passo: Publicar

Após fazer as alterações:
1. Salve o arquivo `index.html`
2. Teste abrindo no navegador
3. Verifique se está tudo correto
4. Faça commit e push para o repositório
5. Publique o site atualizado

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre como editar o HTML ou copiar as avaliações do Google, entre em contato com o desenvolvedor ou consulte tutoriais básicos de HTML.

**Arquivo criado em:** 02/10/2026
**Última atualização:** 02/10/2026
