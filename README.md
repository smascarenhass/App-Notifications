# App-Notifications
Um aplicativo que recebe notificações push usando React Native e Firebase Cloud Messaging (FCM)

## Começando

### Pré-requisitos
- Node.js instalado
- JDK 11 ou superior
- Android Studio com SDK Android

### Configuração do Java

Este projeto requer Java 17 para funcionar com o Firebase, mas você pode manter outras versões do Java para outros projetos. Aqui está como configurar:

1. Crie uma pasta `local` na raiz do projeto e adicione estas funções ao seu `~/.bashrc`:

```bash
# Função para alternar para Java 17 (para projetos React Native)
function use_java17() {
    export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
    export PATH=$JAVA_HOME/bin:$PATH
    echo "Java 17 ativado"
    java -version
}

# Função para voltar ao Java 8
function use_java8() {
    export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
    export PATH=$JAVA_HOME/bin:$PATH
    echo "Java 8 ativado"
    java -version
}
```

2. Recarregue as configurações do bash:
```bash
source ~/.bashrc
```

3. Antes de executar o projeto, ative o Java 17:
```bash
use_java17
```

4. Depois de terminar, você pode voltar ao Java 8:
```bash
use_java8
```

### Configuração inicial

1. Instale as dependências:
```bash
yarn install
```

2. Configure o Firebase:
   - Adicione o arquivo `google-services.json` em `android/app/`
   - Configure as credenciais do Firebase no console

3. Execute o projeto:
```bash
# Ative o Java 17 primeiro
use_java17

# Inicie o app
yarn android
```

## Solução de Problemas

Se você encontrar erros relacionados ao Java, certifique-se de:
1. Ter o Java 17 instalado: `sudo apt install openjdk-17-jdk`
2. Estar usando o Java 17 ao executar o projeto: `use_java17`
3. Ter configurado corretamente o JAVA_HOME



