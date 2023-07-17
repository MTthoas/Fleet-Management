FROM ubuntu:latest

# Mise à jour du conteneur
RUN apt-get update && \
    apt-get upgrade -y

# Installation de Fish, Tmux, vim... ainsi que Python3 pour Ansible
RUN apt-get install -y \
    fish \
    tmux \
    git \
    curl \
    wget \
    vim \
    python3 \
    python3-pip

# Installation d'Ansible
RUN pip3 install ansible

COPY playbook.yml /workspace/playbook.yml

WORKDIR /workspace

CMD ["bash", "-c", "tail -f /dev/null"]
