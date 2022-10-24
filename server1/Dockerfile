#Indica qual imagem vamos utilizar como base.
FROM node:16.13.1
#Informa o diretório padrão da aplicação.
WORKDIR /
#Cria uma variável de ambiente do Dockerfile para indicar a porta que a aplicação vai utilizar.
ARG PORT=3000
#Cria uma variável de ambiente da aplicação e indica que a porta utilizada é a mesma que foi definida na variável de ambiente do Dockerfile.
ENV PORT=$PORT
#Torna variável de ambiente da aplicação visível para o Node.
EXPOSE $PORT
#Copiar o arquivo do diretório que estamos para o diretório da imagem.
COPY ./ .
#Um comando em bash que podemos utilizar para pré-inicializar a aplicação.
RUN npm install
#Executa o comando para iniciar a aplicação.
ENTRYPOINT npm start