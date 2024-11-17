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
        stage('Generate Mochawesome Report') {
            steps {
                bat 'npx mochawesome-merge testing/cypress-reports/*.json > testing/cypress-reports/mochawesome.json'
                bat 'npx mochawesome-report-generator testing/cypress-reports/mochawesome.json'
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'testing/cypress-reports',
                reportFiles: 'mochawesome.html',
                reportName: 'Mochawesome Test Report'
            ])
        }
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}
