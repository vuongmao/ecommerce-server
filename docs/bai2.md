# Cách connect db mongdb hiệu quả

<https://www.youtube.com/watch?v=TiMiJazU4Pc>

## Instal mongodb macos m1

Link: https://www.youtube.com/watch?v=MyIiM7z_j_Y

```
brew install mongodb-community@7.0
```

## Start mongodb

```
brew services start mongodb/brew/mongodb-community

-- Service `mongodb-community` already started, use `brew services restart mongodb-community` to restart.
```

## Connect mongodb

```
mongosh

-- Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.2
```
