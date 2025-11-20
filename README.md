# 🏥 Sistema de Agendamento de Consultas - Frontend

Frontend desenvolvido em React para o sistema de agendamento de consultas médicas. Permite que pacientes e profissionais de saúde gerenciem consultas de forma simples e eficiente.

---

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite 5** - Build tool e dev server
- **React Router DOM v6** - Roteamento
- **Axios** - Cliente HTTP para requisições à API
- **Context API** - Gerenciamento de estado global (autenticação)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem junto com o Node.js)
- **Backend rodando** - O backend deve estar rodando na porta 3001

---

## 🔧 Instalação

### 1. Entre na pasta do projeto

```bash
cd frontend-agendamentos
```

### 2. Instale as dependências

```bash
npm install
```

Isso vai instalar:
- react
- react-dom
- react-router-dom
- axios
- vite
- @vitejs/plugin-react

---

## ▶️ Como Executar

### Modo Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado em:
- **URL:** http://localhost:3000
- **Hot Reload:** Ativado (atualiza automaticamente ao salvar arquivos)

### Modo Produção

```bash
# 1. Gerar build otimizado
npm run build

# 2. Visualizar build localmente
npm run preview
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **dev** | `npm run dev` | Inicia servidor de desenvolvimento (porta 3000) |
| **build** | `npm run build` | Gera build de produção otimizado |
| **preview** | `npm run preview` | Visualiza o build de produção localmente |

---

## ⚙️ Configuração

### Portas

- **Frontend:** http://localhost:3000
- **Backend (API):** http://localhost:3001

### Configuração da API

A URL da API está configurada em:
```
src/services/api.js
```

```javascript
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
```

**Para alterar a URL do backend:**
1. Edite `src/services/api.js`
2. Modifique o `baseURL` para apontar para seu servidor

---

## 📁 Estrutura do Projeto

```
frontend-agendamentos/
├── src/
│   ├── App.jsx                    # Componente principal e rotas
│   ├── main.jsx                   # Entry point do React
│   │
│   ├── components/                # Componentes reutilizáveis
│   │   ├── Navbar.jsx            # Barra de navegação
│   │   ├── Navbar.css
│   │   ├── PrivateRoute.jsx      # Proteção de rotas autenticadas
│   │   └── ...
│   │
│   ├── pages/                     # Páginas da aplicação
│   │   ├── Login.jsx             # Tela de login
│   │   ├── Cadastro.jsx          # Cadastro de usuário
│   │   ├── Consultas.jsx         # Lista de consultas
│   │   ├── Agendamento.jsx       # Agendar nova consulta
│   │   └── *.css                 # Estilos de cada página
│   │
│   ├── context/                   # Context API
│   │   └── AuthContext.jsx       # Contexto de autenticação
│   │
│   ├── services/                  # Camada de comunicação com API
│   │   ├── api.js                # Configuração do Axios
│   │   ├── authService.js        # Serviços de autenticação
│   │   ├── consultaService.js    # Serviços de consultas
│   │   └── usuarioService.js     # Serviços de usuários
│   │
│   └── index.css                  # Estilos globais
│
├── index.html                     # Template HTML
├── vite.config.js                 # Configuração do Vite
├── package.json                   # Dependências e scripts
└── README.md                      # Este arquivo
```

---

## ✨ Funcionalidades

### 🔐 Autenticação
- ✅ Login com email e senha
- ✅ Cadastro de novo usuário (paciente ou profissional)
- ✅ Logout
- ✅ Token JWT armazenado no localStorage
- ✅ Rotas protegidas (requer autenticação)
- ✅ Redirecionamento automático

### 📅 Gerenciamento de Consultas
- ✅ Listar todas as consultas
- ✅ Agendar nova consulta
- ✅ Selecionar profissional/paciente via dropdown
- ✅ Cancelar consultas
- ✅ Visualizar status (agendada, concluída, cancelada)
- ✅ Filtros por data

### 👥 Usuários
- ✅ Lista de profissionais disponíveis
- ✅ Lista de pacientes cadastrados
- ✅ Seleção intuitiva via dropdown

---

## 🔗 Rotas da Aplicação

| Rota | Descrição | Autenticação |
|------|-----------|--------------|
| `/` | Redireciona para /consultas | Não |
| `/login` | Tela de login | Não |
| `/cadastro` | Cadastro de usuário | Não |
| `/consultas` | Lista de consultas | ✅ Sim |
| `/agendamento` | Agendar nova consulta | ✅ Sim |

---

## 🌐 Endpoints da API Utilizados

### Autenticação
```
POST /api/auth/registrar    # Cadastrar usuário
POST /api/auth/login        # Fazer login
```

### Usuários
```
GET /api/usuarios/profissionais    # Listar profissionais
GET /api/usuarios/pacientes        # Listar pacientes
```

### Consultas
```
GET    /api/consultas        # Listar consultas
POST   /api/consultas        # Criar consulta
GET    /api/consultas/:id    # Obter consulta específica
PUT    /api/consultas/:id    # Atualizar consulta
DELETE /api/consultas/:id    # Deletar consulta
```

---

## 🧪 Como Testar

### 1. Cadastrar Usuários

**Cadastrar um Profissional:**
1. Acesse http://localhost:3000/cadastro
2. Preencha:
   - Nome: Dr. João Silva
   - Email: joao@email.com
   - Senha: senha123
   - Tipo: **profissional**
3. Clique em "Cadastrar"

**Cadastrar um Paciente:**
1. Acesse http://localhost:3000/cadastro
2. Preencha:
   - Nome: Maria Santos
   - Email: maria@email.com
   - Senha: senha123
   - Tipo: **paciente**
3. Clique em "Cadastrar"

### 2. Fazer Login

1. Acesse http://localhost:3000/login
2. Use as credenciais criadas
3. Você será redirecionado para `/consultas`

### 3. Agendar Consulta

**Como Paciente:**
1. Faça login como paciente
2. Clique em "+ Nova Consulta"
3. Selecione um profissional no dropdown
4. Escolha data e hora
5. Adicione descrição (opcional)
6. Clique em "Agendar Consulta"

**Como Profissional:**
1. Faça login como profissional
2. Clique em "+ Nova Consulta"
3. Selecione um paciente no dropdown
4. Escolha data e hora
5. Adicione descrição (opcional)
6. Clique em "Agendar Consulta"

### 4. Gerenciar Consultas

1. Visualize todas as suas consultas em `/consultas`
2. Veja o status de cada consulta
3. Cancele consultas agendadas (botão "Cancelar")

---

## 🔍 Solução de Problemas

### Erro de CORS

**Problema:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solução:**
1. Certifique-se de que o backend está rodando
2. Verifique se o backend está na porta 3001
3. Confirme que o CORS está habilitado no backend

---

### Erro "Cannot GET /api/..."

**Problema:**
```
GET http://localhost:3001/api/consultas 404 (Not Found)
```

**Solução:**
1. Verifique se o backend está rodando: http://localhost:3001
2. Teste o endpoint direto: http://localhost:3001/api/consultas
3. Reinicie o backend

---

### Página em branco / Erro no console

**Problema:**
- Tela branca ao acessar
- Erros no console do navegador

**Solução:**
1. Limpe o cache do navegador: `Ctrl + Shift + R` (ou `Cmd + Shift + R`)
2. Limpe localStorage:
   ```javascript
   // No console do navegador:
   localStorage.clear();
   ```
3. Reinstale as dependências:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

### Token expirado

**Problema:**
```
401 Unauthorized
```

**Solução:**
1. O token JWT expira em 8 horas
2. Faça logout e login novamente
3. O sistema redireciona automaticamente para login ao detectar token expirado

---

### Dropdown de profissionais/pacientes vazio

**Problema:**
- Ao agendar consulta, o dropdown não mostra opções

**Solução:**
1. Certifique-se de que existem usuários cadastrados do tipo necessário
2. Se for paciente, precisa ter profissionais cadastrados
3. Se for profissional, precisa ter pacientes cadastrados
4. Verifique o console do navegador para ver erros da API

---

## 🔐 Segurança

### Token JWT
- Token armazenado no `localStorage`
- Enviado automaticamente em todas as requisições (header `Authorization`)
- Interceptor Axios lida com token expirado

### Rotas Protegidas
- Componente `PrivateRoute` protege rotas autenticadas
- Redireciona para `/login` se não autenticado

### Logout Automático
- Detecta resposta 401 da API
- Remove token e dados do localStorage
- Redireciona para login

---

## 🎨 Personalização

### Mudar Tema/Estilos
Edite os arquivos CSS em:
- `src/index.css` - Estilos globais
- `src/pages/*.css` - Estilos específicos de cada página
- `src/components/*.css` - Estilos dos componentes

### Adicionar Nova Página
1. Crie o arquivo em `src/pages/MinhaPage.jsx`
2. Adicione a rota em `src/App.jsx`:
   ```javascript
   <Route path="/minha-page" element={<MinhaPage />} />
   ```

---

## 📚 Recursos Adicionais

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React Router](https://reactrouter.com/)
- [Documentação do Axios](https://axios-http.com/)

---

## 👨‍💻 Desenvolvedor

Trabalho de Faculdade - Sistema de Agendamento de Consultas

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

## ✅ Checklist de Execução

- [ ] Node.js instalado (versão 16+)
- [ ] Backend rodando na porta 3001
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor dev iniciado (`npm run dev`)
- [ ] Navegador aberto em http://localhost:3000
- [ ] Usuários cadastrados (pelo menos 1 paciente e 1 profissional)
- [ ] Login realizado com sucesso
- [ ] Consulta agendada e visualizada

---

**🎉 Pronto! Seu frontend está rodando!**

Se tiver dúvidas ou problemas, consulte a seção de Solução de Problemas acima.
