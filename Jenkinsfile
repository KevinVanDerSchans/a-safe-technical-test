pipeline {
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
        stage('Verify Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Jest tests') {
            steps {
                bat 'npm run test:ci'
            }
        }
        stage('Run Cypress tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
    }
    post {
        always {
            junit '**/testing/*.xml'
        }
    }
    post {
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}
