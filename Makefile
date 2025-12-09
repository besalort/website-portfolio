COMPOSE_PATH=requirement/docker-compose.yml

all:
	cd ./requirement/portfolio && npm install
	cd ./requirement/portfolio && npm run build
	docker compose -f ${COMPOSE_PATH} build --no-cache
	docker compose -f $(COMPOSE_PATH) up -d

start:
	docker compose -f $(COMPOSE_PATH) start

stop:
	docker compose -f $(COMPOSE_PATH) stop

clean:
	docker compose -f $(COMPOSE_PATH) down --rmi all --volumes --remove-orphans

fclean: clean

re:
	docker compose -f $(COMPOSE_PATH) up -d --force-recreate --build

destroy: clean
	docker container prune -f
	docker image prune -a -f
	docker volume prune -f
	docker system prune -a -f
	docker system df
	rm -rf requirement/portfolio/dist
	rm -rf requirement/portfolio/node_modules
	rm -rf requirement/portfolio/.next
	rm -rf requirement/portfolio/tsconfig.json

log:
	docker compose -f $(COMPOSE_PATH) logs frontend_portfolio

dev:
	cd ./requirement/portfolio && npm install
	cd ./requirement/portfolio && npm run dev
	docker compose -f $(COMPOSE_PATH) up -d

.PHONY: all debug start stop clean fclean re destroy log dev