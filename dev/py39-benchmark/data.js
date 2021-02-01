window.BENCHMARK_DATA = {
  "lastUpdate": 1612203575695,
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
          "id": "f4a97d4a7098ce41e292b34d1d2d9565ea79f48e",
          "message": ":memo: Add link to local `icontract` benchmarks",
          "timestamp": "2021-02-01T10:13:45-08:00",
          "tree_id": "03ab79f6c3709ef21802f16ce2c4fca3baefbc00",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f4a97d4a7098ce41e292b34d1d2d9565ea79f48e"
        },
        "date": 1612203574811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15854.556338220684,
            "unit": "iter/sec",
            "range": "stddev: 0.000006840235314932715",
            "extra": "mean: 63.07335119742792 usec\nrounds: 12987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4824866.955164829,
            "unit": "iter/sec",
            "range": "stddev: 1.2055324446415738e-8",
            "extra": "mean: 207.25960099872168 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 15073.222096502755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033756107222066147",
            "extra": "mean: 66.34281599499666 usec\nrounds: 9728"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 208445.9792798853,
            "unit": "iter/sec",
            "range": "stddev: 4.4446514649431273e-7",
            "extra": "mean: 4.797406039947052 usec\nrounds: 45663"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15593.8783249686,
            "unit": "iter/sec",
            "range": "stddev: 0.000009648427221392899",
            "extra": "mean: 64.12772878949687 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5051727.11626801,
            "unit": "iter/sec",
            "range": "stddev: 7.61677336595923e-9",
            "extra": "mean: 197.9521017238159 nsec\nrounds: 112360"
          }
        ]
      }
    ]
  }
}