window.BENCHMARK_DATA = {
  "lastUpdate": 1626097077663,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "9a33ae46c35487a48640bf5fa612029c181aedbb",
          "message": "Merge pull request #242 from TeoZosa/dependabot/pip/hypothesis-6.14.2",
          "timestamp": "2021-07-12T13:19:54Z",
          "tree_id": "a802f2414fb129180c1d69b697d7c6ff41a07cec"
        },
        "date": 1626097076597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16646.920520733063,
            "unit": "iter/sec",
            "range": "stddev: 0.000001708544220915385",
            "extra": "mean: 60.071170445881606 usec\nrounds: 6219"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4732094.664712289,
            "unit": "iter/sec",
            "range": "stddev: 7.458172373433669e-9",
            "extra": "mean: 211.3229068422569 nsec\nrounds: 52084"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14532.1623603123,
            "unit": "iter/sec",
            "range": "stddev: 0.00000217473832164492",
            "extra": "mean: 68.81288380943397 usec\nrounds: 9166"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150300.47151582423,
            "unit": "iter/sec",
            "range": "stddev: 7.740094248431799e-7",
            "extra": "mean: 6.653339074153975 usec\nrounds: 45872"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16608.741753585007,
            "unit": "iter/sec",
            "range": "stddev: 0.000002008118218553866",
            "extra": "mean: 60.20925695856216 usec\nrounds: 10204"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4977651.274528731,
            "unit": "iter/sec",
            "range": "stddev: 1.2472665435582423e-8",
            "extra": "mean: 200.89796268306955 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}