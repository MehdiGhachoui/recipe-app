package utils

import "github.com/spf13/viper"

type Config struct {
	SupabaseURL   string `mapstructure:"SUPABASE_URL"`
	SupabaseKEY   string `mapstructure:"SUPABASE_KEY"`
	ServerAddress string `mapstructure:"SERVER_ADDRESS"`
	OriginURL     string `mapstructure:"ORIGIN_URL"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName(".env")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
