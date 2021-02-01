window.BENCHMARK_DATA = {
  "lastUpdate": 1612200015310,
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
          "id": "641456d5e2590d2c35d006c6f67d60198142474c",
          "message": ":sparkles: Add `icontract` benchmarks",
          "timestamp": "2021-02-01T09:16:08-08:00",
          "tree_id": "c9018f0dd5d9bfae369ca309c458e9c3362f5b2b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/641456d5e2590d2c35d006c6f67d60198142474c"
        },
        "date": 1612200014404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15374.626206918641,
            "unit": "iter/sec",
            "range": "stddev: 0.000012379872162868794",
            "extra": "mean: 65.04223169666369 usec\nrounds: 12361"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4132549.502727692,
            "unit": "iter/sec",
            "range": "stddev: 3.268947294972661e-8",
            "extra": "mean: 241.98137235620308 nsec\nrounds: 5261"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13383.814221549836,
            "unit": "iter/sec",
            "range": "stddev: 0.00003112419905159467",
            "extra": "mean: 74.71711602136993 usec\nrounds: 9662"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 184562.13475551154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013086877098373874",
            "extra": "mean: 5.418229483120655 usec\nrounds: 41149"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14412.4873222865,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435216835710799",
            "extra": "mean: 69.38427612377964 usec\nrounds: 3158"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2207097.6029290925,
            "unit": "iter/sec",
            "range": "stddev: 0.000003153950212383702",
            "extra": "mean: 453.0837234714386 nsec\nrounds: 49998"
          }
        ]
      }
    ]
  }
}