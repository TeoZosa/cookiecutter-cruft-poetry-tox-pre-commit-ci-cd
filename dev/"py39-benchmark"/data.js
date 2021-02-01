window.BENCHMARK_DATA = {
  "lastUpdate": 1612198727536,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "81e107b0d94a1e390291aef09bf939171c838932",
          "message": ":sparkles: Add `icontract` benchmarks",
          "timestamp": "2021-02-01T08:54:14-08:00",
          "tree_id": "f1b685fee82df392742eb7545da0ae2b26677782",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/81e107b0d94a1e390291aef09bf939171c838932"
        },
        "date": 1612198726128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14646.901265613156,
            "unit": "iter/sec",
            "range": "stddev: 0.00015697649114489664",
            "extra": "mean: 68.27382678872297 usec\nrounds: 12020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4133489.341160188,
            "unit": "iter/sec",
            "range": "stddev: 2.9730507993978977e-8",
            "extra": "mean: 241.92635264358452 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13973.274507682738,
            "unit": "iter/sec",
            "range": "stddev: 0.000044928214401178046",
            "extra": "mean: 71.56518677495268 usec\nrounds: 9225"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 178803.06862556803,
            "unit": "iter/sec",
            "range": "stddev: 7.370573477544945e-7",
            "extra": "mean: 5.592745178742444 usec\nrounds: 49262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14912.210297788173,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375002693986223",
            "extra": "mean: 67.05914012950335 usec\nrounds: 13459"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4202455.208605788,
            "unit": "iter/sec",
            "range": "stddev: 3.560668656184901e-8",
            "extra": "mean: 237.95613524937664 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}