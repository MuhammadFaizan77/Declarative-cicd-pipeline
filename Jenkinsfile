pipeline {
    agent any
    stages {
        stage('Clone git repo') {
            steps {
                git url: "https://github.com/MuhammadFaizan77/Declarative-cicd-pipeline.git",branch:"main"
                
            }
        }
         stage('Static Code Analysis') {
            environment {
            SONAR_URL = "http://34.201.116.83:9000"
        }
            steps {
                withCredentials([string(credentialsId: 'sonarqube', variable: 'SONAR_AUTH_TOKEN')]) {
                sh 'cd java-maven-sonar-argocd-helm-k8s/spring-boot-app && mvn sonar:sonar -Dsonar.login=$SONAR_AUTH_TOKEN -Dsonar.host.url=${SONAR_URL}'
                }
            }
            }
        stage('build image') {
            steps {
                echo "buidling image"
                sh "docker build -t react-app ."
            }
        }
       
        stage('Pushing Docker image') {
            steps {
               echo "Pushing the Image"
                
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "docker tag react-app ${env.DOCKER_USER}/react-app:latest"
                    sh "docker login -u ${env.DOCKER_USER} -p ${env.DOCKER_PASS}"
                    sh "docker push ${env.DOCKER_USER}/react-app:latest"
                } // Add this closing curly brace

                
            }
        }
    }
}
