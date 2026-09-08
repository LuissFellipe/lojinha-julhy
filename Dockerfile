# Ambiente de desenvolvimento da landing page BELLIS.
# Evita instalar node/npm na máquina — tudo roda aqui dentro.
FROM node:22-alpine

WORKDIR /app

# Só o manifesto primeiro: o cache do npm install só quebra quando ele muda.
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5173

# --host expõe o servidor para fora do container.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
