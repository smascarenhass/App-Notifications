# Android :
# Definir o diretório do SDK do Android
export ANDROID_SDK_ROOT=~/Android/Sdk
export ANDROID_HOME=~/Android/Sdk

# Adicionar o diretório platform-tools ao PATH
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Configuração do Java (mantendo Java 8 como padrão)
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

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