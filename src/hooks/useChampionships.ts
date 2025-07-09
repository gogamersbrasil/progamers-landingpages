'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {IChampionships} from "@/hooks/interfaces/championships.interface";
import {BaseResponse, EntityResponse} from "@/hooks/interfaces/base";

export function useChampionships() {
  const [championships, setChampionships] = useState<BaseResponse<IChampionships>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchNextChampionships() {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.progamers.com.br/public/championships'
        );

        // Handle the new API response structure where championships are in a "data" array
        // and each championship has "entityId" and "entity" properties
        if (response.data && Array.isArray(response.data.data)) {
          // Map the data to the expected format without filtering by status
          const mappedChampionships = response.data.data
            .map((item: EntityResponse<IChampionships>) => ({
              entity: item.entity,
              files: item.files,
              game_id: null // This field is in BaseResponse but not in EntityResponse
            }));

          setChampionships(mappedChampionships);
        } else {
          // Fallback to the old format if the new structure is not found
          // No longer filtering by status
          const championships = response.data.data || [];
          setChampionships(championships);
        }
      } catch (error) {
        console.error('Erro ao buscar campeonatos:', error);
        setError(error instanceof Error ? error : new Error('Unknown error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchNextChampionships();
  }, []);

  return { championships, loading, error };
}
