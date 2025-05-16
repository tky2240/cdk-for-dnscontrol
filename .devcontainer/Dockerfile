FROM mcr.microsoft.com/devcontainers/base:bookworm

ARG MISE_VERSION=v2025.5.5

RUN curl -L https://github.com/jdx/mise/releases/download/${MISE_VERSION}/mise-${MISE_VERSION}-linux-x64 > /usr/local/bin/mise
RUN chmod +x /usr/local/bin/mise

USER vscode

RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
RUN git clone https://github.com/zsh-users/zsh-completions.git ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions
RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
RUN sed -i 's/^plugins=(\(.*\))/plugins=(\1 zsh-autosuggestions zsh-completions zsh-syntax-highlighting)/' ~/.zshrc

RUN echo 'eval "$(mise activate zsh)"' >> ~/.zshrc