window.BENCHMARK_DATA = {
  "lastUpdate": 1628455507319,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "092bbf30750f22cee1128d77c47a53a5b042d9cf",
          "message": "Merge pull request #274 from TeoZosa/add-rich-text-support-to-console-output\n\n💄🔊Add Rich Text Support to Console Output",
          "timestamp": "2021-08-08T20:40:10Z",
          "tree_id": "fe8466333862b40dfbe2eda1b76ea809a6e28b72"
        },
        "date": 1628455505591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14792.68983264037,
            "unit": "iter/sec",
            "range": "stddev: 0.000009662884573657493",
            "extra": "mean: 67.60095772396171 usec\nrounds: 8279"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5597075.417857385,
            "unit": "iter/sec",
            "range": "stddev: 2.7572985861378946e-8",
            "extra": "mean: 178.66473566014236 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12731.151283567648,
            "unit": "iter/sec",
            "range": "stddev: 0.00002446347505726126",
            "extra": "mean: 78.54749171747885 usec\nrounds: 9719"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 170500.28602725573,
            "unit": "iter/sec",
            "range": "stddev: 7.003185112845569e-7",
            "extra": "mean: 5.865092800138427 usec\nrounds: 50000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16373.716385531328,
            "unit": "iter/sec",
            "range": "stddev: 0.000005190683698951007",
            "extra": "mean: 61.07348975970123 usec\nrounds: 14599"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4827422.30594729,
            "unit": "iter/sec",
            "range": "stddev: 1.1411116069004263e-8",
            "extra": "mean: 207.14989007027086 nsec\nrounds: 158731"
          }
        ]
      }
    ]
  }
}