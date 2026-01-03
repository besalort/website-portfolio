COMPOSE_PATH=requirement/bsalort/docker-compose.yml
FRONT_PATH=requirement/bsalort/frontend
BACK_PATH=requirement/bsalort/backend

all:
	cd ./${FRONT_PATH} && npm install
	cd .//${BACK_PATH} && npm install
	cd ./${FRONT_PATH} && npm install @nestjs/core @nestjs/common @nestjs/platform-express rxjs reflect-metadata
	cd .//${BACK_PATH} && npx nest build
	cd .//${FRONT_PATH} && npm run build
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
	rm -rf ./${FRONT_PATH}/dist
	rm -rf ./${FRONT_PATH}/node_modules
	rm -rf ./${FRONT_PATH}/.next
	rm -rf ./${BACK_PATH}/dist
	rm -rf ./${BACK_PATH}/node_modules
	rm -rf ./${BACK_PATH}/.next
# 	rm -rf requirement/portfolio/tsconfig.json

log:
	docker compose -f $(COMPOSE_PATH) logs frontend_portfolio

dev:
	cd ./${FRONT_PATH} && npm install
# 	cd ./${FRONT_PATH} && npm install three @react-three/fiber@8 @react-three/drei@9
	cd ./${FRONT_PATH} && npm run dev
	docker compose -f $(COMPOSE_PATH) up -d

.PHONY: all debug start stop clean fclean re destroy log dev