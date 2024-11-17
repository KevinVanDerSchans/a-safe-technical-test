pipeline {
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                bat 'if exist node_modules rmdir /s /q node_modules'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm run test:ci'
            }
        }
    }
    post {
        always {
            junit 'testing/junit.xml'
        }
    }
}
