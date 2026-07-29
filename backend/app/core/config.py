from pydantic import AnyHttpUrl
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    mygene_base_url: AnyHttpUrl = "https://mygene.info/v3"
    request_timeout: int = 15


settings = Settings()