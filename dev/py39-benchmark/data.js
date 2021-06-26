window.BENCHMARK_DATA = {
  "lastUpdate": 1624731166708,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "fdb09b0f4b3e31eafcd7e461f58d4ae11bbafe1e",
          "message": ":construction_worker: :pushpin: Pin template `ahmadnassri/action-dependabot-auto-merge` version",
          "timestamp": "2021-06-26T18:07:47Z",
          "tree_id": "4b3fdacfcb45974d676d3746ec5ede67e9951fb4"
        },
        "date": 1624731165631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14767.96922353301,
            "unit": "iter/sec",
            "range": "stddev: 0.000028338034122197884",
            "extra": "mean: 67.71411728069442 usec\nrounds: 12210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2591324.7501773974,
            "unit": "iter/sec",
            "range": "stddev: 9.925948483604762e-7",
            "extra": "mean: 385.9030019033862 nsec\nrounds: 53764"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11902.287682041693,
            "unit": "iter/sec",
            "range": "stddev: 0.00004480512634962684",
            "extra": "mean: 84.01746174467043 usec\nrounds: 8953"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135788.76542404582,
            "unit": "iter/sec",
            "range": "stddev: 0.000013568623544122744",
            "extra": "mean: 7.364379496913208 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14454.893409759065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009796598075987329",
            "extra": "mean: 69.18072459288153 usec\nrounds: 13569"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4499351.532562335,
            "unit": "iter/sec",
            "range": "stddev: 2.554661179401222e-7",
            "extra": "mean: 222.25424992068537 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}