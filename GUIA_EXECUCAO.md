# 🚀 Guia de Execução - Sistema de Agendamentos

Este guia explica como rodar o backend (API) e frontend localmente.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (vem com o Node.js)
- **MongoDB** (local ou MongoDB Atlas)

---

## 🔧 Configuração do Backend (API)

### 1. Instalar dependências

```bash
cd api-agendamentos
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto `api-agendamentos`:

```bash
# Windows (PowerShell)
cd api-agendamentos
Copy-Item .env.example .env
```

Ou crie manualmente o arquivo `.env` com o seguinte conteúdo:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/agendamentos
JWT_SECRET=sua_chave_secreta_super_segura_aqui_123456
```

**Opções de MongoDB:**

- **MongoDB Local:**
  ```
  MONGO_URI=mongodb://localhost:27017/agendamentos
  ```

- **MongoDB Atlas (Cloud):**
  ```
  MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/agendamentos
  ```

### 3. Iniciar o servidor

**Modo desenvolvimento (com nodemon - reinicia automaticamente):**
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

O servidor estará rodando em: **http://localhost:5000**

---

## 🎨 Configuração do Frontend

### 1. Instalar dependências

```bash
cd frontend-agendamentos
npm install
```

### 2. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

O frontend estará rodando em: **http://localhost:3000**

---

## 🎯 Executando o Sistema Completo

### Opção 1: Terminal Único (PowerShell)

Abra o PowerShell e execute:

```powershell
# Terminal 1 - Backend
cd api-agendamentos
npm run dev

# Terminal 2 - Frontend (abra outro terminal)
cd frontend-agendamentos
npm run dev
```

### Opção 2: Script Automatizado (Windows)

Crie um arquivo `iniciar.bat` na raiz do workspace:

```batch
@echo off
echo Iniciando Backend...
start cmd /k "cd api-agendamentos && npm run dev"
timeout /t 3
echo Iniciando Frontend...
start cmd /k "cd frontend-agendamentos && npm run dev"
echo Sistema iniciado!
pause
```

---

## ✅ Verificação

1. **Backend:** Acesse http://localhost:5000
   - Deve aparecer: "🚀 API do Sistema de Consultas está online!"

2. **Frontend:** Acesse http://localhost:3000
   - Deve abrir a tela de login

---

## 🔍 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Reinstale as dependências
npm install
```

### Erro de conexão com MongoDB
- Verifique se o MongoDB está rodando
- Confirme a string de conexão no arquivo `.env`
- Para MongoDB local: `mongodb://localhost:27017/agendamentos`

### Erro: "Port already in use"
- Altere a porta no arquivo `.env` (backend) ou `vite.config.js` (frontend)

### CORS Error
- Certifique-se de que o backend está rodando na porta 5000
- Verifique a URL no arquivo `frontend-agendamentos/src/services/api.js`

---

## 📝 Primeiros Passos

1. **Criar uma conta:**
   - Acesse http://localhost:3000/cadastro
   - Crie uma conta (paciente ou profissional)

2. **Fazer login:**
   - Acesse http://localhost:3000/login
   - Use suas credenciais

3. **Agendar consulta:**
   - Após o login, você verá a lista de consultas
   - Clique em "Nova Consulta" para agendar

---

## 🛠️ Comandos Úteis

```bash
# Backend
npm run dev      # Desenvolvimento com auto-reload
npm start        # Produção

# Frontend
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
```

---

## 📚 Estrutura de Portas

- **Backend (API):** http://localhost:5000
- **Frontend:** http://localhost:3000

---

Pronto! Seu sistema está rodando! 🎉




