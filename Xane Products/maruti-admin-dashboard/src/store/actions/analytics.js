/* eslint-disable no-extend-native */
/* eslint-disable array-callback-return */
import * as actionTypes from "../action_types/analytics";
import { requestApi } from "../../config/apiHandler";
import { getTrends } from "../../utils/utils";
import data from '../result.json';

export const fetchData = () => {
  return async (dispatch) => {
    let trend = [
      {
        count: 20,
        make_id: 1,
        make: "Nexa",
        model_id: 1,
        model: "Baleno",
        date: "2020-11-20T00:00:00.000Z",
      },
      {
        count: 50,
        make_id: 1,
        make: "Nexa",
        model_id: 1,
        model: "Baleno",
        date: "2020-11-21T00:00:00.000Z",
      },
      {
        count: 20,
        make_id: 1,
        make: "Nexa",
        model_id: 2,
        model: "Ciaz",
        date: "2020-11-21T00:00:00.000Z",
      },
      {
        count: 10,
        make_id: 1,
        make: "Nexa",
        model_id: 3,
        model: "Ignis",
        date: "2020-11-21T00:00:00.000Z",
      },
      {
        count: 35,
        make_id: 1,
        make: "Nexa",
        model_id: 3,
        model: "Ignis",
        date: "2020-11-22T00:00:00.000Z",
      },
      {
        count: 9,
        make_id: 1,
        make: "Nexa",
        model_id: 1,
        model: "Ignis",
        date: "2020-11-23T00:00:00.000Z",
      },
    ];

    let count_by_models = [
      {
        count: 7,
        make_id: 1,
        make: "Nexa",
        model_id: 1,
        model: "Baleno",
        target: 5656000,
      },
      {
        count: 2,
        make_id: 1,
        make: "Nexa",
        model_id: 2,
        model: "Ciaz",
        target: 24000000,
      },
      {
        count: 1,
        make_id: 1,
        make: "Nexa",
        model_id: 3,
        model: "Ignis",
        target: 4732000,
      },
      {
        count: 0,
        make_id: 1,
        make: "Nexa",
        model_id: 4,
        model: "S-Cross",
        target: 4400000,
      },
      {
        count: 0,
        make_id: 1,
        make: "Nexa",
        model_id: 5,
        model: "XL6",
        target: 1632000,
      },
    ];

    let parts_count_data = data.data.training.count_by_parts;
    let variants_count_data = data.data.training.count_by_variants;
    let users_count_data = data.data.training.count_by_users;
    let models = Array.from(new Set(trend.map((t) => t.model)));

    // const response = await requestApi("/analytics", "GET", {});
    // const trainings = response.data.training;
    let master_data = {};

    // master_data.model_count_data = trainings.count_by_models;
    // master_data.location_count_data = trainings.count_by_locations;
    // master_data.parts_count_data = trainings.count_by_parts;
    // master_data.users_count_data = trainings.count_by_users;
    // master_data.variants_count_data = trainings.count_by_variants;
    master_data.model_count_data = count_by_models;
    master_data.location_count_data = [];
    master_data.parts_count_data = parts_count_data;
    master_data.users_count_data = users_count_data;
    master_data.variants_count_data = variants_count_data;
    master_data.model_trend = getTrends(models, trend);
    dispatch({
      type: actionTypes.FETCH_ANALYTICS_SUCCESS,
      payload: master_data,
    });
  };
};
